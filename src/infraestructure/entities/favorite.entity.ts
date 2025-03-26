import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, ManyToMany } from 'typeorm'
import { AuditEntity } from './audit.entity'
import { ServiceEntity } from './service.entity'
import { UserEntity } from './user.entity'

@Entity('favorite')
export class FavoriteEntity extends AuditEntity {
    @PrimaryGeneratedColumn()
    favoriteId: number

    @ManyToOne(() => ServiceEntity, (service) => service.favorites)
    services: ServiceEntity

    @ManyToOne(() => UserEntity, (user) => user.favorites)
    users: UserEntity
}
