import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryEntity, ProductEntity } from './entities'
import configuration from '../config/configuration'
const config = configuration()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.database.host,
      port: config.database.port,
      username: config.database.userName,
      password: config.database.password,
      database: config.database.name,
      entities: [CategoryEntity, ProductEntity],
      synchronize: true,
      logging: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class InfrastructureModule {}
