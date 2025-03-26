import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm'
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
    service: ServiceEntity

    @ManyToOne(() => ProviderEntity, (provider) => provider.images)
    provider: ProviderEntity

    @ManyToOne(() => CategoryEntity, (category) => category.images)
    category: CategoryEntity
}
