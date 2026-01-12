import { Controller, Get, Query } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { PaginatedResponseDoc } from '@common/decorators/response-doc.decorator';
import { ProviderUserResDto } from './dto/responses/provider-res.dto';
import { ProviderGetAllReqDto } from './dto/requests/provider-get-all-req.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '@common/decorators/role.decorator';
import { UserRoleEnum } from '@common/constants/user-role';

@ApiTags('Provider')
@Controller('providers')
@Roles(UserRoleEnum.ADMIN)
export class ProviderController {
	constructor(private readonly providerService: ProviderService) {}

	@Get()
	@PaginatedResponseDoc(ProviderUserResDto)
	async getAllProviders(@Query() query?: ProviderGetAllReqDto) {
		return this.providerService.findAll(query);
	}
}
