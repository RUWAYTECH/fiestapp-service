import { UserRoleEnum } from '@common/constants/user-role';
import { IS_PUBLIC_KEY } from '@common/decorators/public.decorator';
import { ROLE_KEY } from '@common/decorators/role.decorator';
import { ResponseBuilder } from '@common/utils/response-builder';
import { config } from '@conf/index';
import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private readonly jwtService: JwtService,
		private readonly reflector: Reflector
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
			context.getHandler(),
			context.getClass()
		]);
		if (isPublic) {
			// 💡 See this condition
			return true;
		}

		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);

		if (!token) {
			throw new UnauthorizedException(ResponseBuilder.error(null, ['No token provided']));
		}

		let payload: any;

		try {
			payload = await this.jwtService.verifyAsync(token, {
				secret: config.jwt.secret
			});
			// 💡 We're assigning the payload to the request object here
			// so that we can access it in our route handlers
			request['user'] = payload;
		} catch {
			console.error('Invalid token');
			throw new UnauthorizedException(ResponseBuilder.error(null, ['Invalid token']));
		}

		const roles = this.reflector.getAllAndOverride<string[]>(ROLE_KEY, [context.getHandler(), context.getClass()]);
		const allowedRoles = roles ?? [UserRoleEnum.ADMIN];

		if (!allowedRoles.includes(payload?.role?.toString())) {
			throw new ForbiddenException(ResponseBuilder.error(null, ['Forbidden resource']));
		}

		return true;
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') || [];

		return type === 'Bearer' ? token : undefined;
	}
}
