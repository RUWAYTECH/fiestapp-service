import { Mapper } from '@common/utils/mapper';
import { ResponseBuilder } from '@common/utils/response-builder';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CategoryCreateReqDto, CategoryUpdateReqDto } from './dto/requests/category-req.dto';
import { CategoryGetAllReqDto } from './dto/requests/category-get-all-req.dto';
import { CategoryListResDto, CategoryResDto } from './dto/responses/category-res.dto';
import { CloudinaryService } from '@external/cloudinary.service';

@Injectable()
export class CategoryService {
	constructor(
		private categoryRepository: CategoryRepository,
		private cloudinaryService: CloudinaryService
	) {}

	async findAll(query?: CategoryGetAllReqDto) {
		let filters = {};

		if (query?.pageSize) {
			filters = {
				skip: ((Number(query.page) || 1) - 1) * Number(query.pageSize),
				take: Number(query.pageSize)
			};
		}

		const [data, count] = await this.categoryRepository.findAll({
			...filters,
			where: query?.search ? { name: { contains: query.search, mode: 'insensitive' } } : undefined,
			orderBy: { createdAt: 'desc' }
		});

		const mappedData = Mapper.mapArray(CategoryListResDto, data);

		return ResponseBuilder.buildPaginated({
			items: mappedData,
			totalRows: count,
			page: query?.page || 1,
			pageSize: query?.pageSize || 0
		});
	}

	async findById(id: string) {
		const item = await this.categoryRepository.findById(id);

		if (!item) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Category not found']));
		}

		return ResponseBuilder.build(Mapper.map(CategoryResDto, item));
	}

	async create(data: CategoryCreateReqDto) {
		const imagePublicId = data.image ? this.cloudinaryService.extractPublicIdFromUrl(data.image) : null;

		if (data.image && !imagePublicId) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Invalid image URL']));
		}

		await this.categoryRepository.create({
			name: data.name,
			description: data.description,
			image: data.image
		});

		return ResponseBuilder.build(null, ['Category created successfully']);
	}

	async update(id: string, data: CategoryUpdateReqDto) {
		const item = await this.categoryRepository.findById(id);

		if (!item) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Category not found']));
		}

		const imagePublicId = data.image ? this.cloudinaryService.extractPublicIdFromUrl(data.image) : null;

		if (data.image && !imagePublicId) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Invalid image URL']));
		}

		const oldImagePublicId = this.cloudinaryService.extractPublicIdFromUrl(item.image);
		if (oldImagePublicId && oldImagePublicId !== imagePublicId) {
			await this.cloudinaryService.deleteImage(oldImagePublicId);
		}

		await this.categoryRepository.update(id, {
			name: data.name,
			description: data.description,
			image: data.image
		});

		return ResponseBuilder.build(null, ['Category updated successfully']);
	}

	async delete(id: string) {
		const item = await this.categoryRepository.findById(id);

		if (!item) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Category not found']));
		}

		const imagePublicId = this.cloudinaryService.extractPublicIdFromUrl(item.image);
		if (imagePublicId) {
			await this.cloudinaryService.deleteImage(imagePublicId);
		}

		await this.categoryRepository.delete(id);

		return ResponseBuilder.build(null, ['Category deleted successfully']);
	}
}
