import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ServiceEntity } from './service.entity'
import { UserEntity } from './user.entity'
import { AuditEntity } from './audit.entity'

@Entity('favourite')
export class FavouriteEntity extends AuditEntity {
  @PrimaryGeneratedColumn()
  favouriteId: number

  @ManyToOne(() => ServiceEntity)
  @JoinColumn({ name: 'serviceId' })
  service: ServiceEntity

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity
}
