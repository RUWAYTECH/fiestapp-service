import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { CategoryEntity } from './category.entity'
import { ServiceEntity } from './services.entity'
import { ProviderEntity } from './provider.entity'

@Entity('image')
export class ImageEntity {
  @PrimaryGeneratedColumn()
  imageId: number

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity

  @ManyToOne(() => ProviderEntity)
  @JoinColumn({ name: 'providerId' })
  provider: ProviderEntity

  @ManyToOne(() => ServiceEntity)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity

  @Column({ type: 'varchar', length: 100 })
  url: string

  @Column({ type: 'varchar', length: 100 })
  name: string
}
