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

@Injectable()
export class CategoriesService extends BaseService {
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
		const result = await this.categoryRepository.findAll()

		const entities = this.utilMapper.mapArray(CategoryResponseDto, result)
		return this.toResponse(entities)
	}

	async remove(id: number): Promise<void> {
		const service = await this.categoryRepository.findById(id)

		if (!service) {
			throw new NotFoundException('Service not found')
		}

		// Ahora pasa el objeto service (ServiceEntity) a la función remove
		await this.categoryRepository.remove(service)
	}

	async findById(serviceId: number): Promise<CategoryEntity> {
		const service = await this.categoryRepository.findById(serviceId)

		if (!service) {
			throw new NotFoundException(`Service with ID ${serviceId} not found`)
		}

		return service
	}

	async update(
		id: number,
		updateCategoryDto: UpdateCategoryDto,
	): Promise<number> {
		// Primero, busca la entidad actual
		const service = await this.categoryRepository.findById(id)

		if (!service) {
			throw new NotFoundException(`Service with ID ${id} not found`)
		}

		// Mapear el DTO a la entidad
		Object.assign(service, updateCategoryDto)

		// Llamamos al repositorio para actualizar la entidad
		const result = await this.categoryRepository.update(id, service)

		// Aquí `result` ya es un número de filas afectadas, no un objeto con `.affected`
		if (result === 0) {
			throw new Error('Failed to update service')
		}

		return result // Devuelve directamente el número de filas afectadas
	}
}
