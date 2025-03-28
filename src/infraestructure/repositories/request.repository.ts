import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { RequestEntity } from '../entities/request.entity'

@Injectable()
export class RequestRepository {
	constructor(
		@InjectRepository(RequestEntity)
		private readonly dao: Repository<RequestEntity>,
	) {}

	async create(request: Partial<RequestEntity>): Promise<RequestEntity> {
		return await this.dao.save(request)
	}

	async update(id: number, entity: RequestEntity): Promise<number> {
		const result = await this.dao.update(id, entity)
		return result.affected ?? 0
	}

	async remove(request: RequestEntity): Promise<DeleteResult> {
		return await this.dao.delete(request)
	}

	async findById(requestId: number): Promise<RequestEntity | null> {
		return await this.dao.findOne({
			where: { requestId },
			relations: ['user', 'service'],
		})
	}

	async findBySpecification(entity: RequestEntity): Promise<RequestEntity[]> {
		return await this.dao.find({ where: { ...entity } })
	}

	async findAll(): Promise<RequestEntity[]> {
		return await this.dao.find()
	}
}
