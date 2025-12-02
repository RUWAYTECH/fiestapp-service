import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '@common/decorators/public.decorator';
import { PaginatedResponseDoc, ResponseDoc } from '@common/decorators/response-doc.decorator';
import { ServiceListResDto, ServiceWithAddressResDto } from './dto/responses/service-res.dto';
import { ServiceGetAllReqDto } from './dto/requests/service-get-all-req.dto';
import { Roles } from '@common/decorators/role.decorator';
import { UserRoleEnum } from '@common/constants/user-role';
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
	@ResponseDoc(ServiceWithAddressResDto)
	async findById(@Param('id') id: string) {
		return this.serviceService.findById(id);
	}

	@Post(':id/favorite')
	@ResponseDoc(null)
	@Roles(UserRoleEnum.USER)
	async toggleFavorite(@Param('id') id: string, @AuthUser('sub') userId: string) {
		return this.serviceService.toggleFavorite(id, userId);
	}
}
