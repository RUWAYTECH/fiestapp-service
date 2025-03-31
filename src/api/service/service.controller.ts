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
import { Public } from '@api/auth/decorators/public.decorator'

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
	@Public()
	@ApiResponse({
		status: 200,
		type: ResponseDto<ServiceResponseDto[]>,
	})
	async getServices(): Promise<ResponseDto<ServiceResponseDto[] | null>> {
		return this.serviceService.findAll()
	}

	@Get(':serviceId')
	@HttpCode(200)
	@ApiOperation({ summary: 'get by serviceId' })
	async findOne(
		@Param('serviceId') serviceId: string,
	): Promise<ResponseDto<ServiceResponseDto | null>> {
		return this.serviceService.findById(+serviceId)
	}

	@ApiOperation({ summary: 'Update service' })
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateServicesDto: UpdateServiceDto) {
		return this.serviceService.update(+id, updateServicesDto)
	}

	@Delete(':serviceId')
	@HttpCode(200)
	@ApiOperation({ summary: 'delete by serviceId' })
	remove(@Param('id') id: number) {
		return this.serviceService.remove(+id)
	}

	@Get('category/:categoryId')
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all services by categoryId' })
	async findByCategoryId(
		@Param('categoryId') categoryId: string,
	): Promise<ResponseDto<ServiceResponseDto[] | null>> {
		return this.serviceService.findByCategoryId(parseInt(categoryId, 10))
	}
}
