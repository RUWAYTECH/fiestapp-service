import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RequestService } from './request.service';
import { ApiTags } from '@nestjs/swagger';
import { RequestCotizationReqDto } from './dto/requests/request-cotization-req.dto';
import { UserRoleEnum } from '@common/constants/user-role';
import { Roles } from '@common/decorators/role.decorator';
import { AuthUser } from '@common/decorators/auth.decorator';
import { ZodValidationPipe } from '@common/pipes/zod-validation.pipe';
import { createRequestCotizationSchema } from './validators/request-cotization-schema';
import { RequestGetAllReqDto } from './dto/requests/request-get-all-req.dto';
import { RequestPayCotizationReqDto } from './dto/requests/request-pay-cotization-req.dto';

@Controller('requests')
@ApiTags('Requests')
export class RequestController {
	constructor(private readonly requestService: RequestService) {}

	@Get()
	@Roles(UserRoleEnum.USER, UserRoleEnum.ADMIN)
	async getAll(
		@AuthUser('sub') userId: string,
		@AuthUser('role') role: UserRoleEnum,
		@Query() query?: RequestGetAllReqDto
	) {
		let queryParams = { ...query };
		if (role === UserRoleEnum.USER) {
			queryParams = { ...queryParams, userId };
		}

		return this.requestService.getAll(queryParams);
	}

	@Get(':id')
	@Roles(UserRoleEnum.USER, UserRoleEnum.ADMIN)
	async getById(@AuthUser('sub') userId: string, @AuthUser('role') role: UserRoleEnum, @Param('id') id: string) {
		let queryUserId: string | undefined = undefined;
		if (role === UserRoleEnum.USER) {
			queryUserId = userId;
		}

		return this.requestService.getById(id, queryUserId);
	}

	@Post('cotization')
	@Roles(UserRoleEnum.USER)
	async createCotizationRequest(
		@Body(new ZodValidationPipe(createRequestCotizationSchema)) data: RequestCotizationReqDto,
		@AuthUser('sub') userId: string
	) {
		return this.requestService.createCotizationRequest(data, userId);
	}

	@Post(':id/pay-cotization')
	@Roles(UserRoleEnum.USER)
	async payCotizationRequest(
		@AuthUser('sub') userId: string,
		@Param('id') id: string,
		@Body() data: RequestPayCotizationReqDto
	) {
		return this.requestService.payCotizationRequest(id, userId, data);
	}
}
