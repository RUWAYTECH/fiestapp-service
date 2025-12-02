import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceRepository } from './service.repository';
import { ServiceGetAllReqDto } from './dto/requests/service-get-all-req.dto';
import { Mapper } from '@common/utils/mapper';
import { ServiceListResDto, ServiceWithAddressResDto } from './dto/responses/service-res.dto';
import { ResponseBuilder } from '@common/utils/response-builder';
import { PrismaService } from '@db/prisma/prisma.service';

@Injectable()
export class ServiceService {
	constructor(
		private readonly serviceRepository: ServiceRepository,
		private readonly prismaService: PrismaService
	) {}

	async findAll(query?: ServiceGetAllReqDto) {
		let filters: { skip?: number; take?: number } = {};

		if (query?.pageSize) {
			filters = {
				skip: ((Number(query.page) || 1) - 1) * Number(query.pageSize),
				take: Number(query.pageSize)
			};
		}

		const [data, count] = await this.serviceRepository.findAll({
			...filters,
			where: {
				name: query?.search ? { contains: query.search } : undefined,
				status: true,
				categoryId: query?.categoryId
					? { in: typeof query.categoryId === 'string' ? [query.categoryId] : query.categoryId }
					: undefined,
				ubigeoServices: query?.ubigeoId
					? {
							some: {
								ubigeoId: { in: typeof query.ubigeoId === 'string' ? [query.ubigeoId] : query.ubigeoId }
							}
						}
					: undefined,
				providerId: query?.providerId ? query.providerId : undefined
			},
			orderBy: { createdAt: 'desc' }
		});

		const transformedData = data.map(item => ({
			...item,
			images: item.images.map(image => image.url)
		}));

		const mappedData = Mapper.mapArray(ServiceListResDto, transformedData);

		return ResponseBuilder.buildPaginated({
			items: mappedData,
			totalRows: count,
			page: query?.page || 1,
			pageSize: query?.pageSize || 0
		});
	}

	async findById(id: string) {
		const item = await this.serviceRepository.findById(id);

		if (!item || !item.status) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Service not found']));
		}

		return ResponseBuilder.build(
			Mapper.map(ServiceWithAddressResDto, {
				...item,
				images: item.images.map(image => image.url),
				address: item.ubigeoServices
					.map(us => `${us.ubigeo.district}, ${us.ubigeo.province}, ${us.ubigeo.department}`)
					.join(' | ')
			})
		);
	}

	async toggleFavorite(id: string, userId: string) {
		const item = await this.serviceRepository.findById(id);

		if (!item) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Service not found']));
		}

		const favorite = await this.prismaService.favorite.findFirst({
			where: { serviceId: id, userId }
		});

		if (favorite) {
			await this.prismaService.favorite.delete({ where: { id: favorite.id } });

			return ResponseBuilder.build(null, ['Service removed from favorites']);
		}

		await this.prismaService.favorite.create({
			data: { serviceId: id, userId }
		});

		return ResponseBuilder.build(null, ['Service added to favorites']);
	}

	async getFavorites(userId: string) {
		const [data] = await this.serviceRepository.findAll({
			where: {
				favorites: { some: { userId } }
			},
			orderBy: { createdAt: 'desc' }
		});

		const mappedData = Mapper.mapArray(
			ServiceListResDto,
			data.map(item => ({
				...item,
				images: item.images.map(image => image.url)
			}))
		);

		return ResponseBuilder.build(mappedData);
	}
}
