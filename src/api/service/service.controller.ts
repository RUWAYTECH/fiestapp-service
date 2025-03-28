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
import { CreateServiceDto } from './dto/create-service.dto'
import { ResponseDto } from 'src/common/dto/response.dto'
import { ServiceResponseDto } from './dto/service-response.dto'
import { AuthGuard } from '../auth/auth.guard'
import { ServiceService } from './service.service'
import { UpdateServiceDto } from './dto/update-service.dto'
import { ServiceEntity } from '@entities/service.entity'

@ApiTags('services')
@Controller('services')
@UseGuards(AuthGuard)
export class ServiceController {
	constructor(private readonly serviceService: ServiceService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create service' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<ServiceResponseDto>,
	})
	async create(
		@Body() data: CreateServiceDto,
	): Promise<ResponseDto<ServiceResponseDto | null>> {
		return this.serviceService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all services' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<ServiceResponseDto[]>,
	})
	async getServices(): Promise<ResponseDto<ServiceResponseDto[] | null>> {
		return this.serviceService.findAll()
	}

	@Get(':id')
	@HttpCode(200)
	async findOne(@Param('id') id: string): Promise<ServiceEntity> {
		return this.serviceService.findById(+id)
	}

	@ApiOperation({ summary: 'Update service' })
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateServicesDto: UpdateServiceDto) {
		return this.serviceService.update(+id, updateServicesDto)
	}

	@Delete(':id')
	@HttpCode(200)
	remove(@Param('id') id: number) {
		return this.serviceService.remove(+id)
	}
}
