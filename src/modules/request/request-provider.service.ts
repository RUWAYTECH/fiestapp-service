import { BadRequestException, Injectable } from '@nestjs/common';
import { RequestRepository } from './request.repository';
import { ServiceRepository } from '@modules/service/service.repository';
import { ResponseBuilder } from '@common/utils/response-builder';
import { RequestGetAllReqDto } from './dto/requests/request-get-all-req.dto';
import { Mapper } from '@common/utils/mapper';
import { RequestWithItemsResDto } from './dto/responses/request-res.dto';
import { RequestRespondReqDto } from './dto/requests/request-respond-req.dto';
import { RequestStatus } from '@g-prisma/client';
import { CreateMailReqDto } from '@modules/mail/dto/requests/create-mail-req.dto';
import { MailService } from '@modules/mail/mail.service';

@Injectable()
export class RequestProviderService {
	constructor(
		private readonly requestRepository: RequestRepository,
		private readonly serviceRepository: ServiceRepository,
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

		const finalPrice = data.items.reduce((sum, item) => sum + (item.priceFinal || 0), 0);

		await this.requestRepository.update(id, {
			status: RequestStatus.IN_PROGRESS,
			finalPrice: finalPrice,
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
		const emailData = new CreateMailReqDto();
		emailData.name = request.user.name;
		emailData.subject = 'Solicitud de Cotización Respondida por el Proveedor';

		const servicesForMail = data.items.map(item => {
			const originalItem = request.items.find(i => i.id === item.id);

			if (!originalItem) {
				throw new BadRequestException(ResponseBuilder.error(null, ['Ítem de la solicitud no encontrado.']));
			}

			const service = originalItem.service as { description?: string };

			return {
				service: service.description ?? '',
				quantity: originalItem.quantity,
				price: item.priceFinal ?? 0,
				total: (item.priceFinal ?? 0) * originalItem.quantity,
				comment: item.comment ?? ''
			};
		});
		emailData.services = servicesForMail;
		emailData.totalPrice = servicesForMail.reduce((sum, s) => sum + s.total, 0);

		await this.mailService.sendEmailByResponseProvider(request.user.email, emailData);

		return ResponseBuilder.build(null, ['Respuesta enviada correctamente.']);
	}
}
