import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	HttpCode,
	UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CategoriesService } from './categories.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { ResponseDto } from 'src/common/dto/response.dto'
import { CategoryResponseDto } from './dto/category-response.dto'
import { AuthGuard } from '../auth/auth.guard'
import { CategoryEntity } from '@entities/category.entity'

@ApiTags('categories')
@Controller('categories')
@UseGuards(AuthGuard)
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create category' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<CategoryResponseDto>,
	})
	async create(
		@Body() data: CreateCategoryDto,
	): Promise<ResponseDto<CategoryResponseDto | null>> {
		return this.categoriesService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all categories' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<CategoryResponseDto[]>,
	})
	async getProviders(): Promise<ResponseDto<CategoryResponseDto[] | null>> {
		return this.categoriesService.findAll()
	}

	@Get(':id')
	@HttpCode(200)
	async findOne(@Param('id') id: string): Promise<CategoryEntity> {
		return this.categoriesService.findById(+id)
	}

	@ApiOperation({ summary: 'Update category' })
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateServicesDto: UpdateCategoryDto,
	) {
		return this.categoriesService.update(+id, updateServicesDto)
	}

	@Delete(':id')
	@HttpCode(200)
	remove(@Param('id') id: number) {
		return this.categoriesService.remove(+id)
	}
}
