import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AuditEntity } from './audit.entity'

@Entity('user')
export class UserEntity extends AuditEntity {
  @PrimaryGeneratedColumn()
  userId: number

  @Column({ type: 'varchar', length: 200 })
  name: string

  @Column({ type: 'varchar', length: 150 })
  email: string

  @Column({ type: 'varchar', length: 100 })
  password: string

  @Column({ type: 'varchar', length: 100 })
  typeUser: string

  @Column({ type: 'varchar', length: 100 })
  phone: string
}
