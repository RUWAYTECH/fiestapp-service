import { UtilMapper } from '../../common/utils/util-mapper'
import { Module } from '@nestjs/common'
import { CategoriesController } from './categories.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryValidator } from './validator/category-validator'
import { CategoryEntity } from '@entities/category.entity'
import { injectionTokens } from '@repositories/injection-tokens'
import { CategoryRepository } from '@repositories/category.repository'
import { CategoriesService } from './categories.service'

@Module({
	imports: [TypeOrmModule.forFeature([CategoryEntity])],
	controllers: [CategoriesController],
	providers: [
		CategoryValidator,
		UtilMapper,
		CategoriesService,
		{
			provide: injectionTokens.categoryRepository,
			useClass: CategoryRepository,
		},
	],
})
export class CategoriesModule {}
