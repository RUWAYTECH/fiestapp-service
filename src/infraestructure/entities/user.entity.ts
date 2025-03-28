import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { AuditEntity } from './audit.entity'
import { ProviderEntity } from './provider.entity'
import { FavoriteEntity } from './favorite.entity'
import { RequestEntity } from './request.entity'

@Entity('user')
export class UserEntity extends AuditEntity {
	@PrimaryGeneratedColumn()
	userId: number

	@Column({ type: 'varchar', length: 200 })
	name: string

	@Column({ type: 'varchar', length: 150, unique: true })
	email: string

	@Column({ type: 'varchar', nullable: true, length: 100 })
	picture?: string

	@Column({ type: 'varchar', length: 100 })
	password: string

	@Column({ type: 'varchar', length: 100, default: 'user' })
	typeUser: string

	@Column({ type: 'varchar', nullable: true, length: 100 })
	phone?: string

	@OneToMany(() => ProviderEntity, (provider) => provider.user)
	provider: ProviderEntity

	@OneToMany(() => FavoriteEntity, (favorite) => favorite.users)
	favorites: FavoriteEntity[]

	@OneToMany(() => RequestEntity, (request) => request.user)
	request: RequestEntity
}
