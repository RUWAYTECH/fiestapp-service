import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { ServiceEntity } from '../entities/service.entity'

@Injectable()
export class ServiceRepository {
	constructor(
		@InjectRepository(ServiceEntity)
		private readonly dao: Repository<ServiceEntity>,
	) {}

	async create(service: Partial<ServiceEntity>): Promise<ServiceEntity> {
		return await this.dao.save(service)
	}

	async update(id: number, entity: ServiceEntity): Promise<number> {
		const result = await this.dao.update(id, entity)
		return result.affected ?? 0
	}

	async remove(service: ServiceEntity): Promise<DeleteResult> {
		return await this.dao.delete(service)
	}

	async findById(serviceId: number): Promise<ServiceEntity | null> {
		return await this.dao.findOne({
			where: { serviceId },
			relations: [
				'user',
				'category',
				'provider',
				'favorites',
				'request',
				'images',
			],
		})
	}

	async findBySpecification(entity: ServiceEntity): Promise<ServiceEntity[]> {
		return await this.dao.find({ where: { ...entity } })
	}

	async findAll(): Promise<ServiceEntity[]> {
		return await this.dao.find({
			relations: [
				'user',
				'category',
				'provider',
				'favorites',
				'request',
				'images',
			],
		})
	}
}
