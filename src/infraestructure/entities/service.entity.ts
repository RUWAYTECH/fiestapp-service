import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	ManyToOne,
	JoinColumn,
} from 'typeorm'
import { AuditEntity } from './audit.entity'
import { ImageEntity } from './image.entity'
import { CategoryEntity } from './category.entity'
import { ProviderEntity } from './provider.entity'
import { FavoriteEntity } from './favorite.entity'
import { RequestEntity } from './request.entity'

@Entity('service')
export class ServiceEntity extends AuditEntity {
	@PrimaryGeneratedColumn()
	serviceId: number

	@Column({ type: 'varchar', length: 100 })
	name: string

	@Column({ type: 'varchar', length: 100 })
	description: string

	@Column({ type: 'varchar', length: 100 })
	address: string

	@Column({ type: 'numeric', precision: 10, scale: 2 })
	priceMax: number

	@Column({ type: 'numeric', precision: 10, scale: 2 })
	priceMin: number

	@Column({ type: 'numeric', precision: 2, scale: 1 })
	score: number

	@OneToMany(() => ImageEntity, (image) => image.service)
	images: ImageEntity[]

	@ManyToOne(() => CategoryEntity, (category) => category.services)
	@JoinColumn({ name: 'categoryId' })
	category: CategoryEntity

	@ManyToOne(() => ProviderEntity, (provider) => provider.services)
	@JoinColumn({ name: 'providerId' })
	provider: ProviderEntity

	@OneToMany(() => FavoriteEntity, (favorite) => favorite.service)
	favorites: FavoriteEntity[]

	@OneToMany(() => RequestEntity, (request) => request.service)
	requests: RequestEntity[]
}
