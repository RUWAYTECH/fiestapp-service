import { PrismaModule } from '@db/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';
import { CloudinaryService } from '@external/cloudinary.service';

@Module({
	imports: [PrismaModule],
	controllers: [CategoryController],
	providers: [CategoryService, CategoryRepository, CloudinaryService]
})
export class CategoryModule {}
