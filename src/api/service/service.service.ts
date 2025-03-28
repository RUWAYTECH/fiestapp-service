import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { ResponseDto } from 'src/common/dto/response.dto'
import { UtilMapper } from 'src/common/utils/util-mapper'
import { BaseService } from '../base/base.service'
import { ServiceValidator } from './validator/service-validator'
import { CreateServiceDto } from './dto/create-service.dto'
import { ServiceResponseDto } from './dto/service-response.dto'
import { injectionTokens } from '@repositories/injection-tokens'
import { ServiceRepository } from '@repositories/service.repository'
import { ServiceEntity } from '@entities/service.entity'
import { UpdateServiceDto } from './dto/update-service.dto'

@Injectable()
export class ServiceService extends BaseService {
	constructor(
		private readonly validator: ServiceValidator,
		private readonly utilMapper: UtilMapper,
		@Inject(injectionTokens.serviceRepository)
		private readonly serviceRepository: ServiceRepository,
	) {
		super()
	}

	async create(
		data: CreateServiceDto,
	): Promise<ResponseDto<ServiceResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const entity = this.utilMapper.map(ServiceEntity, data)

		const result = await this.serviceRepository.create(entity)

		const entityResponse = this.utilMapper.map(ServiceResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async findAll(): Promise<ResponseDto<ServiceResponseDto[] | null>> {
		const services = await this.serviceRepository.findAll()

		const entites = this.utilMapper.mapArray(ServiceResponseDto, services)

		return this.toResponse(entites)
	}

	async remove(id: number): Promise<void> {
		const service = await this.serviceRepository.findById(id)

		if (!service) {
			throw new NotFoundException('Service not found')
		}
		await this.serviceRepository.remove(service)
	}

	async findById(serviceId: number): Promise<ServiceEntity> {
		const service = await this.serviceRepository.findById(serviceId)

		if (!service) {
			throw new NotFoundException(`Service with ID ${serviceId} not found`)
		}

		return service
	}

	async update(
		id: number,
		updateServicesDto: UpdateServiceDto,
	): Promise<number> {
		const service = await this.serviceRepository.findById(id)

		if (!service) {
			throw new NotFoundException(`Service with ID ${id} not found`)
		}

		Object.assign(service, updateServicesDto)

		const result = await this.serviceRepository.update(id, service)

		if (result === 0) {
			throw new Error('Failed to update service')
		}

		return result
	}
}
