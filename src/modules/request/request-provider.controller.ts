import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRoleEnum } from '@common/constants/user-role';
import { Roles } from '@common/decorators/role.decorator';
import { AuthUser } from '@common/decorators/auth.decorator';
import { RequestGetAllReqDto } from './dto/requests/request-get-all-req.dto';
import { RequestProviderService } from './request-provider.service';
import { RequestRespondReqDto } from './dto/requests/request-respond-req.dto';

@Controller('request-services')
@ApiTags('Request Provider')
@Roles(UserRoleEnum.USER)
export class RequestProviderController {
	constructor(private readonly requestProviderService: RequestProviderService) {}

	@Get()
	async getAll(@AuthUser('sub') userId: string, @Query() query?: RequestGetAllReqDto) {
		return this.requestProviderService.getAll(userId, query);
	}

	@Patch('respond/:id')
	async respond(@Param('id') id: string, @Body() data: RequestRespondReqDto, @AuthUser('sub') userId: string) {
		return this.requestProviderService.respond(id, data, userId);
	}
}
