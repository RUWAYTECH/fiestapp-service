import { Inject, Injectable } from '@nestjs/common'
import { BaseService } from '../base/base.service'
import { ProviderValidator } from './validator/provider-validator'
import { UtilMapper } from '@utils/util-mapper'
import { injectionTokens } from '@repositories/injection-tokens'
import { ProviderRepository } from '@repositories/provider.repository'
import { CreateProviderDto } from './dto/create-provider.dto'
import { ResponseDto } from '@dto/response.dto'
import { ProviderResponseDto } from './dto/provider-response.dto'
import { ProviderEntity } from '@entities/provider.entity'

@Injectable()
export class ProviderService extends BaseService {
	constructor(
		private readonly utilMapper: UtilMapper,
		private readonly validator: ProviderValidator,
		@Inject(injectionTokens.providerRepository)
		private readonly providerRepository: ProviderRepository,
	) {
		super()
	}

	async create(
		data: CreateProviderDto,
	): Promise<ResponseDto<ProviderResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const entity = this.utilMapper.map(ProviderEntity, data)

		const result = await this.providerRepository.create(entity)

		const entityResponse = this.utilMapper.map(ProviderResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async findAll(): Promise<ResponseDto<ProviderResponseDto[] | null>> {
		const result = await this.providerRepository.findAll()
		const entities = this.utilMapper.mapArray(ProviderResponseDto, result)
		return this.toResponse(entities)
	}
}
