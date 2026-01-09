import { BadRequestException, Injectable } from '@nestjs/common';
import { RequestRepository } from './request.repository';
import { ServiceRepository } from '@modules/service/service.repository';
import { ResponseBuilder } from '@common/utils/response-builder';
import { RequestGetAllReqDto } from './dto/requests/request-get-all-req.dto';
import { Mapper } from '@common/utils/mapper';
import { RequestWithItemsResDto } from './dto/responses/request-res.dto';
import { RequestRespondReqDto } from './dto/requests/request-respond-req.dto';
import { RequestStatus } from '@g-prisma/client';
import { MailService } from '@modules/mail/mail.service';
import { MailRequestCreatedDto } from '@modules/mail/dto/mail-request-created.dto';
import { UserRepository } from '@modules/user/user.repository';
import { getStatusLabel } from '@common/constants/order-status';
import { RequestStatusEnum } from './constants/request-status';

@Injectable()
export class RequestProviderService {
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
				...(query?.status ? { status: query.status } : {}),
				providerId: userId
			},
			orderBy: { createdAt: 'desc' }
		});

		const mappedData = Mapper.mapArray(RequestWithItemsResDto, data);

		return ResponseBuilder.buildPaginated({
			items: mappedData,
			totalRows: count,
			page: query?.page || 1,
			pageSize: query?.pageSize || 0
		});
	}

	async respond(id: string, data: RequestRespondReqDto, userId: string) {
		const request = await this.requestRepository.findById(id);

		if (!request || request.providerId !== userId) {
			throw new BadRequestException(ResponseBuilder.error(null, ['La solicitud no existe.']));
		}

		if (data.items.some(item => !request.items.find(i => i.id === item.id))) {
			throw new BadRequestException(ResponseBuilder.error(null, ['Uno o más ítems de la solicitud no existen.']));
		}

		const user = await this.userRepository.findById(request.userId);

		if (!user) {
			throw new BadRequestException(ResponseBuilder.error(null, ['El usuario asociado a la solicitud no existe.']));
		}

		const finalPrice = data.items.reduce((sum, item) => sum + (item.priceFinal || 0), 0);

		const savedRequest = await this.requestRepository.update(id, {
			status: RequestStatus.IN_PROGRESS,
			finalPrice,
			items: {
				updateMany: data.items.map(item => ({
					where: { id: item.id },
					data: {
						comment: item.comment,
						total: item.priceFinal != undefined ? item.priceFinal : undefined
					}
				}))
			}
		});

		// Enviar correo al usuario sin afectar el flujo
		try {
			const userEmailData: MailRequestCreatedDto = {
				state: getStatusLabel(savedRequest.status as RequestStatusEnum),
				date: new Date().toLocaleDateString('es-ES', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				}),
				items: data.items.map(item => {
					const requestItem = request.items.find(i => i.id === item.id);
					return {
						name: (requestItem?.service as any)?.description || '',
						quantity: requestItem?.quantity || 1,
						price: item.priceFinal || requestItem?.price || 0,
						subtotal: item.priceFinal || requestItem?.total || 0,
						comment: item.comment || ''
					};
				}),
				subtotal: finalPrice,
				total: finalPrice
			};

			await this.mailService.sendRequestCreatedEmail(
				user.email,
				user.name,
				'Respuesta a tu Solicitud de Cotización',
				{
					order: userEmailData
				},
				'Tu solicitud de cotización ha sido respondida. Revisa los detalles a continuación.'
			);
		} catch (error) {
			console.error('Error enviando correo de respuesta de solicitud:', error);
		}

		return ResponseBuilder.build(null, ['Respuesta enviada correctamente.']);
	}
}
