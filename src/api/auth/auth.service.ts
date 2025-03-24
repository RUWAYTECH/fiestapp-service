import { UserEntity } from '@entities/user.entity'
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { injectionTokens } from '@repositories/injection-tokens'
import { UserRepository } from '@repositories/user.repository'
import { UtilMapper } from '@utils/util-mapper'
import { OAuth2Client } from 'google-auth-library'
import { BaseService } from '../base/base.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { UserResponseDto } from '../user/dto/user-response.dto'
import bcrypt from 'bcrypt'
import configuration from 'src/config/configuration'

@Injectable()
export class AuthService extends BaseService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly utilMapper: UtilMapper,
		@Inject(injectionTokens.userRepository)
		private readonly userRepository: UserRepository,
	) {
		super()
	}

	async signIn(email: string, password: string) {
		const user = await this.userRepository.findByEmail(email)

		const isPasswordValid =
			user == null || !user.password
				? false
				: await bcrypt.compare(password, user.password)

		if (!user || !isPasswordValid) {
			throw new UnauthorizedException('Invalid credentials')
		}

		const entityResponse = this.utilMapper.map(UserResponseDto, user)

		const accessToken = await this.jwtService.signAsync({
			sub: entityResponse.userId,
			email: entityResponse.email,
		})

		return this.toResponse({ accessToken, user: entityResponse })
	}

	async signInWithGoogle(token: string) {
		const client = new OAuth2Client(configuration().googleClientId)
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: configuration().googleClientId,
		})

		const payload = ticket.getPayload()

		if (!payload || !payload.email) {
			throw new UnauthorizedException('Invalid credentials')
		}

		const user = await this.userRepository.findByEmail(payload.email)

		if (!user) {
			const data: CreateUserDto = {
				name: payload.name || '',
				email: payload.email,
				password: '',
				picture: payload.picture,
				typeUser: 'user',
				phone: '',
			}

			const entity = this.utilMapper.map(UserEntity, data)

			const result = await this.userRepository.create(entity)

			const entityResponse = this.utilMapper.map(UserResponseDto, result)

			const accessToken = await this.jwtService.signAsync({
				sub: entityResponse.userId,
				email: entityResponse.email,
			})

			return this.toResponse({ accessToken, user: entityResponse })
		} else {
			const accessToken = await this.jwtService.signAsync({
				sub: user.userId,
				email: user.email,
			})

			const entityResponse = this.utilMapper.map(UserResponseDto, user)

			return this.toResponse({ accessToken, user: entityResponse })
		}
	}
}
