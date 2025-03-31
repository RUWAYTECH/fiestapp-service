import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	Column,
	JoinColumn,
} from 'typeorm'
import { AuditEntity } from './audit.entity'
import { ServiceEntity } from './service.entity'
import { UserEntity } from './user.entity'

@Entity('request')
export class RequestEntity extends AuditEntity {
	@PrimaryGeneratedColumn()
	requestId: number

	@ManyToOne(() => ServiceEntity, (service) => service.request)
	service: ServiceEntity

	@ManyToOne(() => UserEntity, (user) => user.request)
	user: UserEntity

	@Column({ type: 'varchar', length: 150, unique: true })
	message: string

	@Column({ type: 'boolean', default: true })
	status: boolean
}
