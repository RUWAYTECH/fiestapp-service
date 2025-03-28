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
import { CreateRequestDto } from './dto/create-request.dto'
import { ResponseDto } from 'src/common/dto/response.dto'
import { RequestResponseDto } from './dto/request-response.dto'
import { AuthGuard } from '../auth/auth.guard'
import { RequestService } from './request.service'
import { UpdateRequestDto } from './dto/update-request.dto'

@ApiTags('request')
@Controller('request')
@UseGuards(AuthGuard)
export class RequestController {
	constructor(private readonly requestService: RequestService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create request' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<RequestResponseDto>,
	})
	async create(
		@Body() data: CreateRequestDto,
	): Promise<ResponseDto<RequestResponseDto | null>> {
		return this.requestService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all request' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<RequestResponseDto[]>,
	})
	async getServices(): Promise<ResponseDto<RequestResponseDto[] | null>> {
		return this.requestService.findAll()
	}

	@Get(':id')
	@HttpCode(200)
	@ApiOperation({ summary: 'get by requestId' })
	async findOne(
		@Param('id') id: string,
	): Promise<ResponseDto<RequestResponseDto | null>> {
		return this.requestService.findById(+id)
	}

	@ApiOperation({ summary: 'Update request' })
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
		return this.requestService.update(+id, updateRequestDto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'delete by requestId' })
	@HttpCode(200)
	remove(@Param('id') id: number) {
		return this.requestService.remove(+id)
	}
}
