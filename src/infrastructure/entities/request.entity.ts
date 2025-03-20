import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ServiceEntity } from './service.entity'
import { UserEntity } from './user.entity'
import { AuditEntity } from './audit.entity'

@Entity('request')
export class RequestEntity extends AuditEntity {
  @PrimaryGeneratedColumn()
  requestId: number

  @ManyToOne(() => ServiceEntity)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Column({ type: 'varchar', length: 100 })
  messaje: string

  @Column({ type: 'timestamp', nullable: true })
  requestDate: Date

  @Column({ type: 'varchar', length: 100 })
  state: string
}
