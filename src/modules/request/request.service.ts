import { BadRequestException, Injectable } from '@nestjs/common';
import { RequestRepository } from './request.repository';
import { RequestCotizationReqDto } from './dto/requests/request-cotization-req.dto';
import { RequestStatus } from '@g-prisma/client';
import { ServiceRepository } from '@modules/service/service.repository';
import { ResponseBuilder } from '@common/utils/response-builder';
import { RequestGetAllReqDto } from './dto/requests/request-get-all-req.dto';
import { Mapper } from '@common/utils/mapper';
import { RequestResDto, RequestWithItemsResDto } from './dto/responses/request-res.dto';
import { RequestPayCotizationReqDto } from './dto/requests/request-pay-cotization-req.dto';
import { UserRepository } from '@modules/user/user.repository';
import { MailService } from '@modules/mail/mail.service';
import { MailRequestCreatedDto } from '@modules/mail/dto/mail-request-created.dto';
import { getStatusLabel } from '@common/constants/order-status';
import { config } from '@conf/index';

@Injectable()
export class RequestService {
	constructor(
		private readonly requestRepository: RequestRepository,
		private readonly serviceRepository: ServiceRepository,
		private readonly userRepository: UserRepository,
		private readonly mailService: MailService
	) {}

	async getAll(userId: string, query?: RequestGetAllReqDto) {
		let filters = {};

		if (query?.pageSize) {
			filters = {
				skip: ((Number(query.page) || 1) - 1) * Number(query.pageSize),
				take: Number(query.pageSize)
			};
		}

		const [data, count] = await this.requestRepository.findAll({
			...filters,
			where: {
				...(query?.status ? { status: query.status, mode: 'insensitive' } : {}),
				userId
			},
			orderBy: { createdAt: 'desc' }
		});

		const mappedData = Mapper.mapArray(RequestResDto, data);

		return ResponseBuilder.buildPaginated({
			items: mappedData,
			totalRows: count,
			page: query?.page || 1,
			pageSize: query?.pageSize || 0
		});
	}

	async getById(id: string, userId: string) {
		const request = await this.requestRepository.findById(id);

		if (!request || request.userId !== userId) {
			throw new BadRequestException(ResponseBuilder.error(null, ['La solicitud no existe.']));
		}

		const mappedRequest = Mapper.map(RequestWithItemsResDto, request);

		return ResponseBuilder.build(mappedRequest);
	}

	async createCotizationRequest(data: RequestCotizationReqDto, userId: string) {
		const items = await this.serviceRepository.findByIds(data.items.map(item => item.id));

		if (items.length !== data.items.length) {
			throw new BadRequestException(ResponseBuilder.error(null, ['Uno o más servicios no existen.']));
		}

		if (items.map(i => i.providerId).filter((v, i, a) => a.indexOf(v) === i).length > 1) {
			throw new BadRequestException(
				ResponseBuilder.error(null, ['Los servicios deben pertenecer al mismo proveedor.'])
			);
		}

		const user = await this.userRepository.findById(userId);

		if (!user) {
			throw new BadRequestException(ResponseBuilder.error(null, ['El usuario no existe.']));
		}

		const request = await this.requestRepository.create({
			guestQty: data.guestQty,
			budgetAmount: data.budgetAmount,
			finalPrice: items.reduce((sum, item) => {
				const itemData = data.items.find(i => i.id === item.id);
				return sum + (itemData ? item.priceMin * itemData.quantity : 0);
			}, 0),
			eventDate: data.eventDate,
			status: RequestStatus.REQUESTED,
			comment: data.comment,
			provider: { connect: { id: items[0].providerId } },
			items: {
				createMany: {
					data: items.map(item => ({
						quantity: data.items.find(i => i.id === item.id)?.quantity || 1,
						price: item.priceMin,
						total: item.priceMin * (data.items.find(i => i.id === item.id)?.quantity || 1),
						comment: '',
						serviceId: item.id,
						service: item
					}))
				}
			},
			user: { connect: { id: userId } }
		});

		// Obtener el proveedor
		const provider = await this.userRepository.findById(items[0].providerId);

		// Enviar correos sin afectar el flujo
		const emailServices = items.map(item => {
			const itemData = data.items.find(i => i.id === item.id);
			const quantity = itemData?.quantity ?? 1;
			const price = item.priceMin ?? 0;

			return {
				quantity,
				price,
				total: price * quantity,
				comment: '',
				service: item.description
			};
		});

		const totalPrice = emailServices.reduce((sum, s) => sum + s.total, 0);

		// Enviar correo al usuario
		try {
			const userEmailData: MailRequestCreatedDto = {
				state: getStatusLabel(request.status),
				date: new Date(request.createdAt).toLocaleDateString('es-ES', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				}),
				items: emailServices.map(s => ({
					name: s.service,
					quantity: s.quantity,
					price: s.price,
					subtotal: s.total,
					comment: s.comment
				})),
				subtotal: totalPrice,
				total: totalPrice
			};

			await this.mailService.sendRequestCreatedEmail(user.email, user.name, 'Nueva Solicitud de Cotización Creada', {
				order: userEmailData
			});
		} catch (error) {
			console.error('Error enviando correo al usuario:', error);
		}

		// Enviar correo al proveedor
		if (provider && provider.email) {
			try {
				const providerEmailData: MailRequestCreatedDto = {
					state: getStatusLabel(request.status),
					date: new Date(request.createdAt).toLocaleDateString('es-ES', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					}),
					items: emailServices.map(s => ({
						name: s.service,
						quantity: s.quantity,
						price: s.price,
						subtotal: s.total,
						comment: s.comment
					})),
					subtotal: totalPrice,
					total: totalPrice
				};

				await this.mailService.sendRequestCreatedEmail(
					provider.email,
					provider.name,
					'Nueva Solicitud de Cotización Recibida',
					{
						order: providerEmailData
					},
					'Se ha recibido una nueva solicitud de cotización. Por favor, revisa los detalles y responde a la brevedad.'
				);
			} catch (error) {
				console.error('Error enviando correo al proveedor:', error);
			}
		}

		return ResponseBuilder.build(null, ['Solicitud de cotización creada exitosamente.']);
	}

	async payCotizationRequest(id: string, userId: string, data: RequestPayCotizationReqDto) {
		const request = await this.requestRepository.findById(id);

		if (!request || request.userId !== userId) {
			throw new BadRequestException(ResponseBuilder.error(null, ['La solicitud no existe.']));
		}

		if (request.status !== RequestStatus.IN_PROGRESS) {
			throw new BadRequestException(
				ResponseBuilder.error(null, ['La solicitud no está en un estado válido para pagar la cotización.'])
			);
		}

		const savedRequest = await this.requestRepository.update(id, {
			status: RequestStatus.COMPLETED
		});

		await this.requestRepository.createPayment({
			request: { connect: { id: request.id } },
			transferNumber: data.operationNumber,
			image: data.image,
			amount: data.amount,
			method: data.method
		});

		// Enviar correo al proveedor sin afectar el flujo
		if (request.provider && request.provider.email) {
			try {
				const providerEmailData: MailRequestCreatedDto = {
					state: getStatusLabel(savedRequest.status),
					date: new Date().toLocaleDateString('es-ES', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					}),
					items: request.items.map(item => ({
						name: (item.service as any)?.description || '',
						quantity: item.quantity,
						price: item.price,
						subtotal: item.total,
						comment: ''
					})),
					subtotal: savedRequest.finalPrice,
					total: savedRequest.finalPrice
				};

				await this.mailService.sendRequestCreatedEmail(
					config.mail.platformAddress,
					'',
					'Pago de Cotización Recibido',
					{
						order: providerEmailData
					},
					`Se ha recibido el pago de la cotización con número de operación <b>${data.operationNumber}</b>. Por favor, revisa los detalles de la solicitud.`
				);
			} catch (error) {
				console.error('Error enviando correo al proveedor:', error);
			}
		}

		return ResponseBuilder.build(null, ['Solicitud de cotización pagada exitosamente.']);
	}
}
