import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateReqDto, CategoryUpdateReqDto } from './dto/requests/category-req.dto';
import { CategoryGetAllReqDto } from './dto/requests/category-get-all-req.dto';
import { PaginatedResponseDoc, ResponseDoc } from '@common/decorators/response-doc.decorator';
import { CategoryListResDto, CategoryResDto } from './dto/responses/category-res.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '@common/decorators/public.decorator';
import { ZodValidationPipe } from '@common/pipes/zod-validation.pipe';
import { createCategorySchema, updateCategorySchema } from './validators/category-schema';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	@Public()
	@PaginatedResponseDoc(CategoryListResDto)
	async findAll(@Query() query?: CategoryGetAllReqDto) {
		return this.categoryService.findAll(query);
	}

	@Get(':id')
	@ResponseDoc(CategoryResDto)
	async findById(@Param('id') id: string) {
		return this.categoryService.findById(id);
	}

	@Post()
	@ResponseDoc(null)
	async create(@Body(new ZodValidationPipe(createCategorySchema)) data: CategoryCreateReqDto) {
		return this.categoryService.create(data);
	}

	@Put(':id')
	@ResponseDoc(null)
	async update(@Param('id') id: string, @Body(new ZodValidationPipe(updateCategorySchema)) data: CategoryUpdateReqDto) {
		return this.categoryService.update(id, data);
	}

	@Delete(':id')
	@ResponseDoc(null)
	async delete(@Param('id') id: string) {
		return this.categoryService.delete(id);
	}
}
