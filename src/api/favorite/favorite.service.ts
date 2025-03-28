import { UtilMapper } from "@utils/util-mapper"
import { FavoriteValidator } from "./validator/favorite-validator"
import { injectionTokens } from "@repositories/injection-tokens"
import { Inject, Injectable, NotFoundException } from "@nestjs/common"
import { FavoriteRepository } from "@repositories/favorite.repository"
import { CreateFavoriteDto } from "./dto/create-favorite.dto"
import { ResponseDto } from "@dto/response.dto"
import { FavoriteResponseDto } from "./dto/favorite-response.dto"
import { FavoriteEntity } from "@entities/favorite.entity"
import { BaseService } from "@api/base/base.service"
import { UpdateFavoriteDto } from "./dto/update-favorite.dot"

@Injectable()
export class FavoriteService extends BaseService {
	constructor(
		private readonly validator: FavoriteValidator,
		private readonly utilMapper: UtilMapper,
		@Inject(injectionTokens.favoriteRepository)
		private readonly favoriteRepository: FavoriteRepository,
	) {
		super()
	}

	async create(
		data: CreateFavoriteDto,
	): Promise<ResponseDto<FavoriteResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const entity = this.utilMapper.map(FavoriteEntity, data)

		const result = await this.favoriteRepository.create(entity)

		const entityResponse = this.utilMapper.map(FavoriteResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async findAll(): Promise<ResponseDto<FavoriteResponseDto[] | null>> {
		const favorites = await this.favoriteRepository.findAll()
		const entites = this.utilMapper.mapArray(FavoriteResponseDto, favorites)
		
		return this.toResponse(entites)
	}

	async remove(id: number): Promise<void> {
		const service = await this.favoriteRepository.findById(id)

		if (!service) {
			throw new NotFoundException('Service not found')
		}

		// Ahora pasa el objeto service (ServiceEntity) a la función remove
		await this.favoriteRepository.remove(service)
	}

	async findById(favoriteId: number): Promise<ResponseDto<FavoriteResponseDto | null>> {
		const favorites = await this.favoriteRepository.findById(favoriteId)

		if (!favorites) {
			throw new NotFoundException(`Service with ID ${favoriteId} not found`)
		}

        const entites = this.utilMapper.map(FavoriteResponseDto, favorites)

		return this.toResponse(entites)
	}

	async update(
		id: number,
		updateFavoriteDto: UpdateFavoriteDto,
	): Promise<number> {
		// Primero, busca la entidad actual
		const service = await this.favoriteRepository.findById(id)

		if (!service) {
			throw new NotFoundException(`Service with ID ${id} not found`)
		}

		// Mapear el DTO a la entidad
		Object.assign(service, updateFavoriteDto)

		// Llamamos al repositorio para actualizar la entidad
		const result = await this.favoriteRepository.update(id, service)

		// Aquí `result` ya es un número de filas afectadas, no un objeto con `.affected`
		if (result === 0) {
			throw new Error('Failed to update service')
		}

		return result // Devuelve directamente el número de filas afectadas
	}
}