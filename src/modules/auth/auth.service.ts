import { ResponseBuilder } from '@common/utils/response-builder';
import { UserRepository } from '@modules/user/user.repository';
import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CredentialSignInReqDto, UserSignInResDto } from './dto/user-signin.dto';
import { ResponseDto } from '@common/dtos/response.dto';
import * as bcrypt from 'bcrypt';
import { Mapper } from '@common/utils/mapper';
import { AuthProviderEnum } from '@common/constants/auth-provider';
import { config } from '@conf/index';
import { OAuth2Client } from 'google-auth-library';
import { UserRoleEnum } from '@common/constants/user-role';
import { CredentialSignUpReqDto } from './dto/user-signup.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly jwtService: JwtService
	) {}

	async credentialSignIn(data: CredentialSignInReqDto): Promise<ResponseDto<UserSignInResDto>> {
		const user = await this.userRepository.findByEmail(data.email);

		const isPasswordValid = user === null ? false : await bcrypt.compare(data.password, user.password);

		if (!user || !isPasswordValid) {
			throw new UnauthorizedException(ResponseBuilder.error(null, ['Invalid email or password']));
		}

		//TODO: Add scope handling logic

		const token = await this.jwtService.signAsync({ sub: user.id, email: user.email, role: user.role });

		const mapped = Mapper.map(UserSignInResDto, { user, token });

		return ResponseBuilder.build(mapped);
	}

	async credentialSignUp(data: CredentialSignUpReqDto): Promise<ResponseDto<UserSignInResDto>> {
		let user = await this.userRepository.findByEmail(data.email);

		if (user) {
			throw new BadRequestException(ResponseBuilder.error(null, ['Email already in use']));
		}

		const hashedPassword = await bcrypt.hash(data.password, 10);

		user = await this.userRepository.create({
			email: data.email,
			password: hashedPassword,
			name: data.name,
			phone: '',
			role: UserRoleEnum.USER,
			authProvider: AuthProviderEnum.LOCAL,
			picture: ''
		});

		const token = await this.jwtService.signAsync({ sub: user.id, email: user.email, role: user.role });

		const mapped = Mapper.map(UserSignInResDto, { user, token });

		return ResponseBuilder.build(mapped);
	}

	async socialSignIn(token: string, provider: AuthProviderEnum): Promise<ResponseDto<UserSignInResDto>> {
		if (provider === AuthProviderEnum.GOOGLE) {
			return this.googleSignIn(token);
		} else if (provider === AuthProviderEnum.FACEBOOK) {
			throw new BadRequestException(ResponseBuilder.error(null, ['Facebook sign-in not implemented']));
		}

		throw new BadRequestException(ResponseBuilder.error(null, ['Unsupported social provider']));
	}

	async changePassword(data: ChangePasswordDto, userId: string): Promise<ResponseDto<null>> {
		const user = await this.userRepository.findById(userId);

		if (!user) {
			throw new UnauthorizedException(ResponseBuilder.error(null, ['User not found']));
		}

		if (user.authProvider !== AuthProviderEnum.LOCAL) {
			throw new ForbiddenException(
				ResponseBuilder.error(null, ['Password change is only available for local accounts'])
			);
		}

		const isCurrentPasswordValid = await bcrypt.compare(data.currentPassword, user.password);

		if (!isCurrentPasswordValid) {
			throw new BadRequestException(ResponseBuilder.error(null, ['Current password is incorrect']));
		}

		const newHashedPassword = await bcrypt.hash(data.newPassword, 10);

		await this.userRepository.update(userId, { password: newHashedPassword });

		return ResponseBuilder.build(null, ['Password changed successfully']);
	}

	private async googleSignIn(idToken: string) {
		const payload = await this.validateGoogleToken(idToken);

		if (!payload || !payload.email) {
			throw new UnauthorizedException(ResponseBuilder.error(null, ['Invalid credentials']));
		}

		let user = await this.userRepository.findByEmail(payload.email);

		if (!user) {
			user = await this.userRepository.create({
				email: payload.email,
				name: payload.name ?? '',
				picture: payload.picture ?? '',
				role: UserRoleEnum.USER,
				authProvider: AuthProviderEnum.GOOGLE,
				password: '',
				phone: ''
			});
		}

		const mapped = Mapper.map(UserSignInResDto, {
			user,
			token: await this.jwtService.signAsync({ sub: user.id, email: user.email, role: user.role })
		});

		return ResponseBuilder.build(mapped);
	}

	async validateGoogleToken(token: string) {
		const client = new OAuth2Client(config.google.clientId);

		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: config.google.clientId
		});

		const payload = ticket.getPayload();

		return payload;
	}
}
