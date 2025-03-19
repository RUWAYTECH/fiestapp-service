import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { UserEntity } from './user.entity'

@Entity('provider')
export class ProviderEntity {
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
