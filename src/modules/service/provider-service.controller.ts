import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ProviderServiceService } from './provider-service.service';
import { ApiTags } from '@nestjs/swagger';
import { PaginatedResponseDoc, ResponseDoc } from '@common/decorators/response-doc.decorator';
import { ServiceListResDto, ServiceWithUbigeoResDto } from './dto/responses/service-res.dto';
import { ServiceGetAllReqDto } from './dto/requests/service-get-all-req.dto';
import { Roles } from '@common/decorators/role.decorator';
import { UserRoleEnum } from '@common/constants/user-role';
import { ZodValidationPipe } from '@common/pipes/zod-validation.pipe';
import { userCreateServiceSchema } from './validators/service-schema';
import { ServiceUserCreateReqDto } from './dto/requests/service-req.dto';
import { AuthUser } from '@common/decorators/auth.decorator';

@Controller('provider-services')
@ApiTags('Provider Service')
@Roles(UserRoleEnum.USER)
export class ProviderServiceController {
	constructor(private readonly providerServiceService: ProviderServiceService) {}

	@Get()
	@PaginatedResponseDoc(ServiceListResDto)
	async findAll(@AuthUser('sub') userId: string, @Query() query?: ServiceGetAllReqDto) {
		return this.providerServiceService.findAll(userId, query);
	}

	@Get(':id')
	@ResponseDoc(ServiceWithUbigeoResDto)
	async findById(@Param('id') id: string) {
		return this.providerServiceService.findById(id);
	}

	@Post()
	@ResponseDoc(null)
	async create(
		@Body(new ZodValidationPipe(userCreateServiceSchema)) body: ServiceUserCreateReqDto,
		@AuthUser('sub') userId: string
	) {
		return this.providerServiceService.create(body, userId);
	}

	@Put(':id')
	@ResponseDoc(null)
	async update(
		@Param('id') id: string,
		@Body(new ZodValidationPipe(userCreateServiceSchema)) body: ServiceUserCreateReqDto,
		@AuthUser('sub') userId: string
	) {
		return this.providerServiceService.update(id, body, userId);
	}

	@Delete(':id')
	@ResponseDoc(null)
	async delete(@Param('id') id: string, @AuthUser('sub') userId: string) {
		return this.providerServiceService.delete(id, userId);
	}

	@Patch(':id/change-status')
	@ResponseDoc(null)
	async changeStatus(@Param('id') id: string, @AuthUser('sub') userId: string) {
		return this.providerServiceService.changeStatus(id, userId);
	}
}
