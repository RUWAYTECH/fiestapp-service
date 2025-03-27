import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ProviderService } from './provider.service'
import { ResponseDto } from '@dto/response.dto'
import { CreateProviderDto } from './dto/create-provider.dto'
import { ProviderResponseDto } from './dto/provider-response.dto'

@Controller('providers')
@ApiTags('providers')
export class ProviderController {
	constructor(private readonly providerService: ProviderService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create provider' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<ProviderResponseDto>,
	})
	async create(
		@Body() data: CreateProviderDto,
	): Promise<ResponseDto<ProviderResponseDto | null>> {
		return this.providerService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all providers' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<ProviderResponseDto[]>,
	})
	async getProviders(): Promise<ResponseDto<ProviderResponseDto[] | null>> {
		return this.providerService.findAll()
	}
}
