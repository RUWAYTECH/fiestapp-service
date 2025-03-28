import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { ResponseDto } from 'src/common/dto/response.dto'
import { UtilMapper } from 'src/common/utils/util-mapper'
import { BaseService } from '../base/base.service'
import { RequestValidator } from './validator/request-validator'
import { CreateRequestDto } from './dto/create-request.dto'
import { RequestResponseDto } from './dto/request-response.dto'
import { injectionTokens } from '@repositories/injection-tokens'
import { RequestRepository } from '@repositories/request.repository'
import { UpdateRequestDto } from './dto/update-request.dto'
import { RequestEntity } from '@entities/request.entity'

@Injectable()
export class RequestService extends BaseService {
	constructor(
		private readonly validator: RequestValidator,
		private readonly utilMapper: UtilMapper,
		@Inject(injectionTokens.requestRepository)
		private readonly requestRepository: RequestRepository,
	) {
		super()
	}

	async create(
		data: CreateRequestDto,
	): Promise<ResponseDto<RequestResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const entity = this.utilMapper.map(RequestEntity, data)

		const result = await this.requestRepository.create(entity)

		const entityResponse = this.utilMapper.map(RequestResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async findAll(): Promise<ResponseDto<RequestResponseDto[] | null>> {
		const request = await this.requestRepository.findAll()

		const entites = this.utilMapper.mapArray(RequestResponseDto, request)

		return this.toResponse(entites)
	}

	async remove(id: number): Promise<void> {
		const request = await this.requestRepository.findById(id)

		if (!request) {
			throw new NotFoundException('request not found')
		}

		await this.requestRepository.remove(request)
	}

	async findById(
		requestId: number,
	): Promise<ResponseDto<RequestResponseDto | null>> {
		const request = await this.requestRepository.findById(requestId)
		const response = this.utilMapper.map(RequestResponseDto, request)
		return this.toResponse(response)
	}

	async update(
		id: number,
		updateRequestDto: UpdateRequestDto,
	): Promise<number> {
		const request = await this.requestRepository.findById(id)

		if (!request) {
			throw new NotFoundException(`request with ID ${id} not found`)
		}

		Object.assign(request, updateRequestDto)

		const result = await this.requestRepository.update(id, request)

		if (result === 0) {
			throw new Error('Failed to update request')
		}

		return result
	}
}
