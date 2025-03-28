import { ImageEntity } from '@entities/image.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ImageRepository {
	constructor(
		@InjectRepository(ImageEntity)
		private readonly dao: Repository<ImageEntity>,
	) {}

	async create(entity: Partial<ImageEntity>): Promise<ImageEntity> {
		return await this.dao.save(entity)
	}

	async update(id: number, entity: Partial<ImageEntity>): Promise<number> {
		const result = await this.dao.update(id, entity)
		return result.affected ?? 0
	}

	async remove(image: ImageEntity) {
		return await this.dao.delete(image)
	}

	async findById(imageId: number): Promise<ImageEntity | null> {
		return await this.dao.findOneBy({ imageId: imageId })
	}

	async findAll(): Promise<ImageEntity[]> {
		return await this.dao.find()
	}
}
