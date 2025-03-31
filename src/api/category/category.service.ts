import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { CategoryResponseDto } from './dto/category-response.dto'
import { ResponseDto } from 'src/common/dto/response.dto'
import { UtilMapper } from 'src/common/utils/util-mapper'
import { CategoryValidator } from './validator/category-validator'
import { BaseService } from '../base/base.service'
import { injectionTokens } from '@repositories/injection-tokens'
import { CategoryRepository } from '@repositories/category.repository'
import { CategoryEntity } from '@entities/category.entity'
import { ImageResponseDto } from '@api/image/dto/image-response.dto'
import { ImageService } from '@api/image/image.service'

@Injectable()
export class CategoryService extends BaseService {
	constructor(
		private readonly validator: CategoryValidator,
		private readonly utilMapper: UtilMapper,
		@Inject(injectionTokens.categoryRepository)
		private readonly categoryRepository: CategoryRepository,
	) {
		super()
	}

	async create(
		data: CreateCategoryDto,
	): Promise<ResponseDto<CategoryResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const entity = this.utilMapper.map(CategoryEntity, data)

		const result = await this.categoryRepository.create(entity)

		const entityResponse = this.utilMapper.map(CategoryResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async findAll(): Promise<ResponseDto<CategoryResponseDto[] | null>> {
		const categories = await this.categoryRepository.findAll()
		const entities = this.utilMapper.mapArray(CategoryResponseDto, categories)
		return this.toResponse(entities)
	}

	async remove(id: number): Promise<void> {
		const category = await this.categoryRepository.findById(id)

		if (!category) {
			throw new NotFoundException('Category not found')
		}
		await this.categoryRepository.remove(category)
	}

	async findById(
		categoryId: number,
	): Promise<ResponseDto<CategoryResponseDto | null>> {
		const category = await this.categoryRepository.findById(categoryId)
		const response = this.utilMapper.map(CategoryResponseDto, category)
		return this.toResponse(response)
	}

	async update(
		id: number,
		updateCategoryDto: UpdateCategoryDto,
	): Promise<number> {
		const category = await this.categoryRepository.findById(id)

		if (!category) {
			throw new NotFoundException(`Category with ID ${id} not found`)
		}

		Object.assign(category, updateCategoryDto)
		const result = await this.categoryRepository.update(id, category)

		if (result === 0) {
			throw new Error('Failed to update category')
		}

		return result
	}
}
