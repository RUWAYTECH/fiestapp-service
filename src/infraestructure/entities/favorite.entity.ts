import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { AuditEntity } from './audit.entity'
import { ServiceEntity } from './service.entity'
import { UserEntity } from './user.entity'

@Entity('favorite')
export class FavoriteEntity extends AuditEntity {
	@PrimaryGeneratedColumn()
	favoriteId: number

	@ManyToOne(() => ServiceEntity, (service) => service.favorites)
	@JoinColumn({ name: 'serviceId' })
	service: ServiceEntity

	@ManyToOne(() => UserEntity, (user) => user.favorites)
	@JoinColumn({ name: 'userId' })
	user: UserEntity
}
