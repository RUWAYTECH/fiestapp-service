import {
	Controller,
	Post,
	Body,
	HttpCode,
	UseGuards,
	Patch,
	Param,
	Get,
	Delete,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateServicesDto } from './dto/create-services.dto'
import { ResponseDto } from 'src/common/dto/response.dto'
import { ServicesResponseDto } from './dto/services-response.dto'
import { AuthGuard } from '../auth/auth.guard'
import { ServicesService } from './services.service'
import { UpdateServicesDto } from './dto/update-services.dto'
import { ServiceEntity } from '@entities/service.entity'

@ApiTags('services')
@Controller('services')
@UseGuards(AuthGuard)
export class ServicesController {
	constructor(private readonly servicesService: ServicesService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create service' })
	@ApiResponse({
		status: 200,
		description: 'Forbidden.',
		type: ResponseDto<ServicesResponseDto>,
	})
	async create(
		@Body() createServicesDto: CreateServicesDto,
	): Promise<ResponseDto<ServicesResponseDto>> {
		return this.servicesService.create(createServicesDto)
	}

	@Get()
	@HttpCode(200)
	async findAll(): Promise<ResponseDto<ServicesResponseDto[] | null>> {
		return this.servicesService.findAll()
	}

	@Get(':id')
	@HttpCode(200)
	async findOne(@Param('id') id: string): Promise<ServiceEntity> {
		return this.servicesService.findById(+id)
	}

	@ApiOperation({ summary: 'Update service' })
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateServicesDto: UpdateServicesDto,
	) {
		return this.servicesService.update(+id, updateServicesDto)
	}

	@Delete(':id')
	@HttpCode(200)
	remove(@Param('id') id: number) {
		return this.servicesService.remove(+id)
	}
}
