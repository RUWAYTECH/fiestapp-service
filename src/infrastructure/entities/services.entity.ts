import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('service')
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  serviceId: number

  @Column({ type: 'varchar', length: 10 })
  description: string

  @Column({ type: 'varchar', length: 100 })
  name: string
}
