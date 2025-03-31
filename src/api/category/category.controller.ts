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
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { ResponseDto } from 'src/common/dto/response.dto'
import { CategoryResponseDto } from './dto/category-response.dto'
import { AuthGuard } from '../auth/auth.guard'
import { Public } from '@api/auth/decorators/public.decorator'

@ApiTags('categories')
@Controller('categories')
@UseGuards(AuthGuard)
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

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
		return this.categoryService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all category' })
	@Public()
	@ApiResponse({
		status: 200,
		type: ResponseDto<CategoryResponseDto[]>,
	})
	async getProviders(): Promise<ResponseDto<CategoryResponseDto[] | null>> {
		return this.categoryService.findAll()
	}

	@Get(':id')
	@HttpCode(200)
	@ApiOperation({ summary: 'delete by categoryId' })
	@Public()
	async findOne(
		@Param('id') id: string,
	): Promise<ResponseDto<CategoryResponseDto | null>> {
		return this.categoryService.findById(+id)
	}

	@ApiOperation({ summary: 'Update category' })
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateCategoryDto: UpdateCategoryDto,
	) {
		return this.categoryService.update(+id, updateCategoryDto)
	}

	@Delete(':id')
	@HttpCode(200)
	@ApiOperation({ summary: 'delete by categoryId' })
	remove(@Param('id') id: number) {
		return this.categoryService.remove(+id)
	}
}
