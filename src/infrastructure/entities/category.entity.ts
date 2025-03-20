import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AuditEntity } from './audit.entity'

@Entity('category')
export class CategoryEntity extends AuditEntity {
  @PrimaryGeneratedColumn()
  categoryId: number

  @Column({ type: 'varchar', length: 10 })
  code: string

  @Column({ type: 'varchar', length: 100 })
  name: string
}
