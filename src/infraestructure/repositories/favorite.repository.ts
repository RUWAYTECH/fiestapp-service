import { FavoriteEntity } from '@entities/favorite.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class FavoriteRepository {
	constructor(
		@InjectRepository(FavoriteEntity)
		private readonly dao: Repository<FavoriteEntity>,
	) {}

	async create(entity: Partial<FavoriteEntity>): Promise<FavoriteEntity> {
		return await this.dao.save(entity)
	}

	async update(id: number, entity: Partial<FavoriteEntity>): Promise<number> {
		const result = await this.dao.update(id, entity)
		return result.affected ?? 0
	}

	async remove(favorite: FavoriteEntity) {
		return await this.dao.delete(favorite)
	}

	async findById(favoriteId: number): Promise<FavoriteEntity | null> {
		return await this.dao.findOneBy({ favoriteId: favoriteId })
	}

	async findAll(): Promise<FavoriteEntity[]> {
		return await this.dao.find()
	}
}
