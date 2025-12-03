import { PrismaService } from '@db/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@g-prisma/client';

@Injectable()
export class CategoryRepository {
	constructor(private prisma: PrismaService) {}

	async findById(id: string): Promise<Category | null> {
		return await this.prisma.category.findUnique({
			where: { id }
		});
	}

	async findAll(params?: {
		skip?: number;
		take?: number;
		cursor?: Prisma.CategoryWhereUniqueInput;
		where?: Prisma.CategoryWhereInput;
		include?: Prisma.CategoryInclude | null | undefined;
		orderBy?: Prisma.CategoryOrderByWithRelationInput;
	}): Promise<[Category[], number]> {
		const { skip, take, cursor, where, orderBy, include } = params || {};

		const [data, count] = await this.prisma.$transaction([
			this.prisma.category.findMany({
				skip,
				take,
				cursor,
				where,
				include,
				orderBy
			}),
			this.prisma.category.count({ where })
		]);

		return [data, count];
	}

	async create(data: Prisma.CategoryCreateInput): Promise<Category> {
		return await this.prisma.category.create({
			data
		});
	}

	async update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category> {
		return await this.prisma.category.update({
			where: { id },
			data
		});
	}

	async delete(id: string): Promise<Category> {
		return await this.prisma.category.delete({
			where: { id }
		});
	}
}
