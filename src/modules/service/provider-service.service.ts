import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ServiceRepository } from './service.repository';
import { CloudinaryService } from '@external/cloudinary.service';
import { ServiceGetAllReqDto } from './dto/requests/service-get-all-req.dto';
import { Mapper } from '@common/utils/mapper';
import { ServiceListResDto, ServiceWithUbigeoResDto } from './dto/responses/service-res.dto';
import { ResponseBuilder } from '@common/utils/response-builder';
import { ServiceUserCreateReqDto } from './dto/requests/service-req.dto';
import { PrismaService } from '@db/prisma/prisma.service';

@Injectable()
export class ProviderServiceService {
	constructor(
		private readonly serviceRepository: ServiceRepository,
		private readonly cloudinaryService: CloudinaryService,
		private readonly prismaService: PrismaService
	) {}

	async findAll(userId: string, query?: ServiceGetAllReqDto) {
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
				name: query?.search ? { contains: query.search, mode: 'insensitive' } : undefined,
				status: query?.status != undefined ? Boolean(query.status) : undefined,
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
				providerId: userId
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

		if (!item) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Service not found']));
		}

		return ResponseBuilder.build(
			Mapper.map(ServiceWithUbigeoResDto, {
				...item,
				images: item.images.map(image => image.url),
				ubigeos: item.ubigeoServices.map(ubigeoService => ubigeoService.ubigeo)
			})
		);
	}

	async create(data: ServiceUserCreateReqDto, userId: string) {
		const existingService = await this.prismaService.provider.findUnique({
			where: { id: userId }
		});

		if (!existingService) {
			throw new ForbiddenException(ResponseBuilder.error(null, ['No tienes permisos para crear un servicio']));
		}

		await this.prismaService.service.create({
			data: {
				name: data.name,
				description: data.description,
				priceMin: data.priceMin,
				priceMax: data.priceMax,
				category: { connect: { id: data.categoryId } },
				provider: { connect: { id: userId } },
				ubigeoServices: {
					create: data.ubigeoIds.map(ubigeoId => ({ ubigeo: { connect: { id: ubigeoId } } }))
				},
				images: {
					create: data.imageUrls.map(url => ({
						publicId: this.cloudinaryService.extractPublicIdFromUrl(url)!,
						url,
						name: ''
					}))
				},
				status: data.status,
				score: 5
			}
		});

		return ResponseBuilder.build(null, ['Service created successfully']);
	}

	async update(id: string, data: ServiceUserCreateReqDto, userId: string) {
		const item = await this.serviceRepository.findById(id);

		if (!item || item.providerId !== userId) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Service not found']));
		}

		await this.prismaService.$transaction(async prisma => {
			await prisma.ubigeoService.deleteMany({
				where: { serviceId: id }
			});

			await prisma.serviceImage.deleteMany({
				where: { serviceId: id }
			});

			await prisma.service.update({
				where: { id },
				data: {
					name: data.name,
					description: data.description,
					priceMin: data.priceMin,
					priceMax: data.priceMax,
					category: { connect: { id: data.categoryId } },
					ubigeoServices: {
						create: data.ubigeoIds.map(ubigeoId => ({ ubigeo: { connect: { id: ubigeoId } } }))
					},
					images: {
						create: data.imageUrls.map(url => ({
							publicId: this.cloudinaryService.extractPublicIdFromUrl(url)!,
							url,
							name: ''
						}))
					},
					status: data.status
				}
			});
		});

		return ResponseBuilder.build(null, ['Service updated successfully']);
	}

	async delete(id: string, userId: string) {
		const item = await this.serviceRepository.findById(id);

		if (!item || item.providerId !== userId) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Service not found']));
		}

		await this.prismaService.$transaction(async prisma => {
			await prisma.ubigeoService.deleteMany({
				where: { serviceId: id }
			});

			await prisma.favorite.deleteMany({
				where: { serviceId: id }
			});

			const images = await prisma.serviceImage.findMany({
				where: { serviceId: id }
			});

			await this.cloudinaryService.deleteImages(images.map(image => image.publicId));

			await prisma.serviceImage.deleteMany({
				where: { serviceId: id }
			});

			await this.serviceRepository.delete(id);
		});

		return ResponseBuilder.build(null, ['Service deleted successfully']);
	}

	async changeStatus(id: string, userId: string) {
		const item = await this.serviceRepository.findById(id);

		if (!item || item.providerId !== userId) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Service not found']));
		}

		await this.prismaService.service.update({
			where: { id },
			data: { status: !item.status }
		});

		return ResponseBuilder.build(null, ['Service status changed successfully']);
	}
}
