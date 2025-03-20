import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class UserEntity {
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
