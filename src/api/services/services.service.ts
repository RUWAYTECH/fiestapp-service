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
import { severityStatusEnum } from '@constants/severity-status.enum'
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
		createServicesDto: CreateServicesDto,
	): Promise<ResponseDto<ServicesResponseDto>> {
		const validResult = this.validator.validate(createServicesDto)

		if (Object.keys(validResult).length !== 0) {
			return new ResponseDto(
				{} as ServicesResponseDto,
				'Error de validación',
				severityStatusEnum.Error,
				validResult,
			)
		}

		const entity = this.utilMapper.map<ServiceEntity, CreateServicesDto>(
			ServiceEntity,
			createServicesDto,
		)

		const result = await this.servicesRepository.create(entity)

		if (!result) {
			return new ResponseDto(
				{} as ServicesResponseDto,
				'Error al crear el servicio',
				severityStatusEnum.Error,
			)
		}

		// Ajuste en el orden de los parámetros: primero el tipo destino, luego el objeto a mapear
		const entityResponse = this.utilMapper.map<
			ServicesResponseDto,
			ServiceEntity
		>(ServicesResponseDto, result)

		return new ResponseDto(entityResponse ?? ({} as ServicesResponseDto))
	}

	async findAll(): Promise<ServicesResponseDto[]> {
		const services = await this.servicesRepository.findAll()
		return services.map((service) =>
			this.utilMapper.map(ServicesResponseDto, service),
		)
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
