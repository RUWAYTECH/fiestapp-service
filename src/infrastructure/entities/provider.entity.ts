import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { UserEntity } from './user.entity'
import { AuditEntity } from './audit.entity'

@Entity('provider')
export class ProviderEntity extends AuditEntity {
  @PrimaryGeneratedColumn()
  providerId: number

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Column({ type: 'varchar', length: 100 })
  nameEnterprise: string

  @Column({ type: 'varchar', length: 100 })
  description: string

  @Column({ type: 'varchar', length: 100 })
  address: string

  @Column({ type: 'varchar', length: 100 })
  status: string
}
