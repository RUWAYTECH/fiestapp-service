import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserRepository {
	constructor(
		@InjectRepository(UserEntity)
		private readonly dao: Repository<UserEntity>,
	) {}

	async create(entity: Partial<UserEntity>): Promise<UserEntity> {
		return await this.dao.save(entity)
	}

	async update(id: number, entity: Partial<UserEntity>): Promise<number> {
		const result = await this.dao.update(id, entity)
		return result.affected ?? 0
	}

	async findById(userId: number): Promise<UserEntity | null> {
		return await this.dao.findOneBy({ userId: userId })
	}

	findByEmail(email: string): Promise<UserEntity | null> {
		return this.dao.findOneBy({ email })
	}

	async remove(user: UserEntity) {
		await this.dao.delete(user)
	}

	async findBySpecification(entity: UserEntity): Promise<UserEntity[]> {
		return await this.dao.find({ where: { ...entity } })
	}
}
