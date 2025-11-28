import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '@common/decorators/public.decorator';
import { PaginatedResponseDoc, ResponseDoc } from '@common/decorators/response-doc.decorator';
import { ServiceListResDto, ServiceResDto } from './dto/responses/service-res.dto';
import { ServiceGetAllReqDto } from './dto/requests/service-get-all-req.dto';
import { Roles } from '@common/decorators/role.decorator';
import { UserRoleEnum } from '@common/constants/user-role';
import { ZodValidationPipe } from '@common/pipes/zod-validation.pipe';
import { userCreateServiceSchema } from './validators/service-schema';
import { ServiceUserCreateReqDto } from './dto/requests/service-req.dto';
import { AuthUser } from '@common/decorators/auth.decorator';

@Controller('services')
@ApiTags('Service')
export class ServiceController {
	constructor(private readonly serviceService: ServiceService) {}

	@Get()
	@Public()
	@PaginatedResponseDoc(ServiceListResDto)
	async findAll(@Query() query?: ServiceGetAllReqDto) {
		return this.serviceService.findAll(query);
	}

	@Get('favorites')
	@PaginatedResponseDoc(ServiceListResDto)
	@Roles(UserRoleEnum.USER)
	async getFavorites(@AuthUser('sub') userId: string) {
		return this.serviceService.getFavorites(userId);
	}

	@Get(':id')
	@Public()
	@ResponseDoc(ServiceResDto)
	async findById(@Param('id') id: string) {
		return this.serviceService.findById(id);
	}

	@Post()
	@ResponseDoc(null)
	@Roles(UserRoleEnum.USER)
	async userCreate(
		@Body(new ZodValidationPipe(userCreateServiceSchema)) body: ServiceUserCreateReqDto,
		@AuthUser('sub') userId: string
	) {
		return this.serviceService.userCreate(body, userId);
	}

	@Put(':id')
	@ResponseDoc(null)
	@Roles(UserRoleEnum.USER)
	async userUpdate(
		@Param('id') id: string,
		@Body(new ZodValidationPipe(userCreateServiceSchema)) body: ServiceUserCreateReqDto,
		@AuthUser('sub') userId: string
	) {
		return this.serviceService.userUpdate(id, body, userId);
	}

	@Post(':id/favorite')
	@ResponseDoc(null)
	@Roles(UserRoleEnum.USER)
	async toggleFavorite(@Param('id') id: string, @AuthUser('sub') userId: string) {
		return this.serviceService.toggleFavorite(id, userId);
	}
}
