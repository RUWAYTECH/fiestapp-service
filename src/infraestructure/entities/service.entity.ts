import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm'
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

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    priceMax: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    priceMin: number

    @Column({ type: 'numeric', precision: 1, scale: 2 })
    score: number

    @OneToMany(() => ImageEntity, (image) => image.service)
    images: ImageEntity[]

    @ManyToOne(() => CategoryEntity, (category) => category.services)
    category: CategoryEntity

    @ManyToOne(() => ProviderEntity, (provider) => provider.services)
    provider: ProviderEntity

    @OneToMany(() => FavoriteEntity, (favorite) => favorite.services)
    favorites: FavoriteEntity[]

    @OneToMany(() => RequestEntity, (request) => request.services)
    request: RequestEntity
}
