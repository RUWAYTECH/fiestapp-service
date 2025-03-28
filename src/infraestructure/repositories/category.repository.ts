import { CategoryEntity } from '@entities/category.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'

@Injectable()
export class CategoryRepository {
	constructor(
		@InjectRepository(CategoryEntity)
		private readonly dao: Repository<CategoryEntity>,
	) {}

	async create(entity: CategoryEntity): Promise<CategoryEntity> {
		return await this.dao.save(entity)
	}

	async update(id: number, entity: CategoryEntity): Promise<number> {
		const result = await this.dao.update(id, entity)
		return result.affected ?? 0
	}

	async remove(service: CategoryEntity): Promise<DeleteResult> {
		return await this.dao.delete(service)
	}

	async findById(categoryId: number): Promise<CategoryEntity | null> {
		return await this.dao.findOne({ where: { categoryId } })
	}

	async findBySpecification(entity: CategoryEntity): Promise<CategoryEntity[]> {
		return await this.dao.find({ where: { ...entity } })
	}

	async findAll(): Promise<CategoryEntity[]> {
		return await this.dao.find({ relations: ['images', 'services'] })
	}
}
