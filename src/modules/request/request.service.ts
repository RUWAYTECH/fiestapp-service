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

@Injectable()
export class RequestService {
	constructor(
		private readonly requestRepository: RequestRepository,
		private readonly serviceRepository: ServiceRepository
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

		await this.requestRepository.create({
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

		await this.requestRepository.update(id, {
			status: RequestStatus.COMPLETED
		});

		await this.requestRepository.createPayment({
			request: { connect: { id: request.id } },
			transferNumber: data.operationNumber,
			image: data.image,
			amount: data.amount,
			method: data.method
		});

		return ResponseBuilder.build(null, ['Solicitud de cotización pagada exitosamente.']);
	}
}
