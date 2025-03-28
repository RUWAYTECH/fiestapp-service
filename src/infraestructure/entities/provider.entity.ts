// eslint-disable-next-line prettier/prettier
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, JoinColumn } from 'typeorm'
import { AuditEntity } from './audit.entity'
import { UserEntity } from './user.entity'
import { ImageEntity } from './image.entity'
import { ServiceEntity } from './service.entity'

@Entity('provider')
export class ProviderEntity extends AuditEntity {
	@PrimaryGeneratedColumn()
	providerId: number

	@Column({ type: 'varchar', length: 100 })
	description: string

	@Column({ type: 'varchar', length: 100 })
	nameEnterprise: string

	@Column({ type: 'varchar', length: 100 })
	foto: string

	@Column({ type: 'boolean', default: true })
	status: boolean

	@Column({ type: 'varchar', length: 100 })
	address: string

	@ManyToOne(() => UserEntity, (user) => user.providers)
	@JoinColumn({ name: 'userId' })
	user: UserEntity

	@OneToMany(() => ImageEntity, (image) => image.provider)
	images: ImageEntity[]

	@OneToMany(() => ServiceEntity, (service) => service.provider)
	services: ServiceEntity[]
}
