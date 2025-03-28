import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { ImageService } from "./image.service"
import { ResponseDto } from "@dto/response.dto"
import { ImageResponseDto } from "./dto/image-response.dto"
import { CreateImageDto } from "./dto/create-image.dto"
import { ImageEntity } from "@entities/image.entity"
import { UpdateImageDto } from "./dto/update-image.dto"

@Controller('images')
@ApiTags('images')
export class ImageController {
	constructor(private readonly imageService: ImageService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create image' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<ImageResponseDto>,
	})
	async create(
		@Body() data: CreateImageDto,
	): Promise<ResponseDto<ImageResponseDto | null>> {
		return this.imageService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all images' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<ImageResponseDto[]>,
	})
	async getImages(): Promise<ResponseDto<ImageResponseDto[] | null>> {
		return this.imageService.findAll()
	}

	@Get(':id')
	@HttpCode(200)
	async findOne(@Param('id') id: string): Promise<ImageEntity> {

		return this.imageService.findById(+id)
	}

	@ApiOperation({ summary: 'Update image' })
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateImageDto: UpdateImageDto,
	) {
		return this.imageService.update(+id, updateImageDto)
	}

	@Delete(':id')
	@HttpCode(200)
	remove(@Param('id') id: number) {
		return this.imageService.remove(+id)
	}
}