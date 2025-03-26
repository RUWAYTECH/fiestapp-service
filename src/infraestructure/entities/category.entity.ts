import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { AuditEntity } from './audit.entity'
import { ImageEntity } from './image.entity'
import { ServiceEntity } from './service.entity'

@Entity('category')
export class CategoryEntity extends AuditEntity {
    @PrimaryGeneratedColumn()
    categoryId: number

    @Column({ type: 'varchar', length: 100 })
    name: string

    @Column({ type: 'varchar', length: 100 })
    description: string

    @OneToMany(() => ImageEntity, (image) => image.provider)
    images: ImageEntity[]

    @OneToMany(() => ServiceEntity, (service) => service.category)
    services: ServiceEntity[]
}
