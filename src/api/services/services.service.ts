import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { ResponseDto } from 'src/common/dto/response.dto'
import { UtilMapper } from 'src/common/utils/util-mapper'
import { BaseService } from '../base/base.service'
import { ServicesValidator } from './validator/services-validator'
import { CreateServicesDto } from './dto/create-services.dto'
import { ServicesResponseDto } from './dto/services-response.dto'
import { injectionTokens } from '@repositories/injection-tokens'
import { ServicesRepository } from '@repositories/services.repository'
import { ServiceEntity } from '@entities/service.entity'
import { UpdateServicesDto } from './dto/update-services.dto'

@Injectable()
export class ServicesService extends BaseService {
	constructor(
		private readonly validator: ServicesValidator,
		private readonly utilMapper: UtilMapper,
		@Inject(injectionTokens.servicesRepository)
		private readonly servicesRepository: ServicesRepository,
	) {
		super()
	}

	async create(
		data: CreateServicesDto,
	): Promise<ResponseDto<ServicesResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const entity = this.utilMapper.map(ServiceEntity, data)

		const result = await this.servicesRepository.create(entity)

		const entityResponse = this.utilMapper.map(ServicesResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async findAll(): Promise<ResponseDto<ServicesResponseDto[] | null>> {
		const services = await this.servicesRepository.findAll()

		const entites = this.utilMapper.mapArray(ServicesResponseDto, services)

		return this.toResponse(entites)
	}

	async remove(id: number): Promise<void> {
		const service = await this.servicesRepository.findById(id)

		if (!service) {
			throw new NotFoundException('Service not found')
		}

		// Ahora pasa el objeto service (ServiceEntity) a la función remove
		await this.servicesRepository.remove(service)
	}

	async findById(serviceId: number): Promise<ServiceEntity> {
		const service = await this.servicesRepository.findById(serviceId)

		if (!service) {
			throw new NotFoundException(`Service with ID ${serviceId} not found`)
		}

		return service
	}

	async update(
		id: number,
		updateServicesDto: UpdateServicesDto,
	): Promise<number> {
		// Primero, busca la entidad actual
		const service = await this.servicesRepository.findById(id)

		if (!service) {
			throw new NotFoundException(`Service with ID ${id} not found`)
		}

		// Mapear el DTO a la entidad
		Object.assign(service, updateServicesDto)

		// Llamamos al repositorio para actualizar la entidad
		const result = await this.servicesRepository.update(id, service)

		// Aquí `result` ya es un número de filas afectadas, no un objeto con `.affected`
		if (result === 0) {
			throw new Error('Failed to update service')
		}

		return result // Devuelve directamente el número de filas afectadas
	}
}
