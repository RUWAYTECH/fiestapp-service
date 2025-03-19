import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ServiceEntity } from './services.entity'
import { UserEntity } from './user.entity'

@Entity('request')
export class RequestEntity {
  @PrimaryGeneratedColumn()
  favouriteId: number

  @ManyToOne(() => ServiceEntity)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Column({ type: 'varchar', length: 100 })
  messaje: string

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date

  @Column({ type: 'varchar', length: 100 })
  state: string
}
