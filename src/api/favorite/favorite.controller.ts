import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { FavoriteService } from "./favorite.service"
import { ResponseDto } from "@dto/response.dto"
import { FavoriteResponseDto } from "./dto/favorite-response.dto"
import { CreateFavoriteDto } from "./dto/create-favorite.dto"
import { FavoriteEntity } from "@entities/favorite.entity"
import { UpdateFavoriteDto } from "./dto/update-favorite.dot"

@Controller('favorites')
@ApiTags('favorites')
export class FavoriteController {
	constructor(private readonly favoriteService: FavoriteService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create favorite' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<FavoriteResponseDto>,
	})
	async create(
		@Body() data: CreateFavoriteDto,
	): Promise<ResponseDto<FavoriteResponseDto | null>> {
		return this.favoriteService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all favorites' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<FavoriteResponseDto[]>,
	})
	async getFavorites(): Promise<ResponseDto<FavoriteResponseDto[] | null>> {
		return this.favoriteService.findAll()
	}

	@Get(':id')
	@HttpCode(200)
	async findOne(@Param('id') id: string): Promise<ResponseDto<FavoriteResponseDto | null>> {
		return this.favoriteService.findById(+id)
	}

	@ApiOperation({ summary: 'Update favorite' })
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateFavoriteDto: UpdateFavoriteDto,
	) {
		return this.favoriteService.update(+id, updateFavoriteDto)
	}

	@Delete(':id')
	@HttpCode(200)
	remove(@Param('id') id: number) {
		return this.favoriteService.remove(+id)
	}
}