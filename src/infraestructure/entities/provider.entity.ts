import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm'
import { AuditEntity } from './audit.entity'
import { UserEntity } from './user.entity'

@Entity('provider')
export class ProviderEntity extends AuditEntity {
	@PrimaryGeneratedColumn()
	providerId: number

	@Column({ type: 'varchar', length: 100 })
	description: string

	@ManyToOne(() => UserEntity, (user) => user.provider)
	user: UserEntity
}
