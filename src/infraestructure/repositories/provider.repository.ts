import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProviderEntity } from '../entities/provider.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ProviderRepository {
	constructor(
		@InjectRepository(ProviderEntity)
		private readonly dao: Repository<ProviderEntity>,
	) {}

	async create(provider: Partial<ProviderEntity>): Promise<ProviderEntity> {
		return await this.dao.save(provider)
	}

	async update(id: number, provider: Partial<ProviderEntity>): Promise<number> {
		const result = await this.dao.update(id, provider)
		return result.affected ?? 0
	}

	async findById(providerId: number): Promise<ProviderEntity | null> {
		return await this.dao.findOneBy({ providerId: providerId })
	}

	async remove(provider: ProviderEntity) {
		await this.dao.delete(provider)
	}

	async findBySpecification(
		provider: ProviderEntity,
	): Promise<ProviderEntity[]> {
		return await this.dao.find({ where: { ...provider } })
	}
}
