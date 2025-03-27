import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { UserResponseDto } from './dto/user-response.dto'
import { ResponseDto } from '@dto/response.dto'
import { BaseService } from '../base/base.service'
import { UserRepository } from '@repositories/user.repository'
import { UtilMapper } from '@utils/util-mapper'
import { UserValidator } from './validator/user-validator'
import { UserEntity } from '@entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { injectionTokens } from '@repositories/injection-tokens'

@Injectable()
export class UserService extends BaseService {
	constructor(
		private readonly utilMapper: UtilMapper,
		private readonly validator: UserValidator,
		@Inject(injectionTokens.userRepository)
		private readonly userRepository: UserRepository,
	) {
		super()
	}

	async findByEmail(
		email: string,
	): Promise<ResponseDto<UserResponseDto | null>> {
		const result = await this.userRepository.findByEmail(email)

		if (!result) {
			return this.toResponse(null, {
				email: 'User not found',
			})
		}

		const entityResponse = this.utilMapper.map(UserResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async create(
		data: CreateUserDto,
	): Promise<ResponseDto<UserResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const user = await this.userRepository.findByEmail(data.email)

		if (user) {
			throw new BadRequestException('User already exists')
		}

		const entity = this.utilMapper.map(UserEntity, data)

		const result = await this.userRepository.create(entity)

		const entityResponse = this.utilMapper.map(UserResponseDto, result)

		return this.toResponse(entityResponse)
	}
}
