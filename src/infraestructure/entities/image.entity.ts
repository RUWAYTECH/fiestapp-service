import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	Column,
	JoinColumn,
} from 'typeorm'
import { AuditEntity } from './audit.entity'
import { ServiceEntity } from './service.entity'
import { ProviderEntity } from './provider.entity'
import { CategoryEntity } from './category.entity'

@Entity('image')
export class ImageEntity extends AuditEntity {
	@PrimaryGeneratedColumn()
	imageId: number

	@Column({ type: 'varchar', length: 100 })
	url: string

	@Column({ type: 'varchar', length: 100 })
	name: string

	@ManyToOne(() => ServiceEntity, (service) => service.images)
	@JoinColumn({ name: 'serviceId' })
	service: ServiceEntity

	@ManyToOne(() => ProviderEntity, (provider) => provider.images)
	@JoinColumn({ name: 'providerId' })
	provider: ProviderEntity

	@ManyToOne(() => CategoryEntity, (category) => category.images)
	@JoinColumn({ name: 'categoryId' })
	category: CategoryEntity
}
