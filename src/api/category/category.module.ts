import { UtilMapper } from '../../common/utils/util-mapper'
import { Module } from '@nestjs/common'
import { CategoryController } from './category.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryValidator } from './validator/category-validator'
import { CategoryEntity } from '@entities/category.entity'
import { injectionTokens } from '@repositories/injection-tokens'
import { CategoryRepository } from '@repositories/category.repository'
import { CategoryService } from './category.service'

@Module({
	imports: [TypeOrmModule.forFeature([CategoryEntity])],
	controllers: [CategoryController],
	providers: [
		CategoryValidator,
		UtilMapper,
		CategoryService,
		{
			provide: injectionTokens.categoryRepository,
			useClass: CategoryRepository,
		},
	],
})
export class CategoryModule {}
