import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ProviderEntity } from './provider.entity'
import { CategoryEntity } from './category.entity'

@Entity('service')
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  serviceId: number

  @ManyToOne(() => ProviderEntity)
  @JoinColumn({ name: 'providerId' })
  provider: ProviderEntity

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity

  @Column({ type: 'varchar', length: 10 })
  description: string

  @Column({ type: 'varchar', length: 100 })
  name: string

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  priceMax: number

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  priceMin: number

  @Column({ type: 'integer' })
  qualification: number
}
