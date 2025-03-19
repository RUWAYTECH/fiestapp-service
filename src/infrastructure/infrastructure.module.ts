import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryEntity, ProductEntity } from './entities'
import configuration from '../config/configuration'
import { UserEntity } from './entities/user.entity'
import { FavouriteEntity } from './entities/favourite.entity'
import { ImageEntity } from './entities/image.entity'
import { ServiceEntity } from './entities/services.entity'
import { RequestEntity } from './entities/request.entity'
import { ProviderEntity } from './entities/provider.entity'

const config = configuration()
console.log(process.env)
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const config = configuration()
        return {
          type: 'postgres',
          host: config.database.host,
          port: config.database.port,
          username: config.database.userName,
          password: config.database.password,
          database: config.database.name,
          entities: [
            CategoryEntity,
            ProductEntity,
            UserEntity,
            ProviderEntity,
            FavouriteEntity,
            ProductEntity,
            ImageEntity,
            ServiceEntity,
            RequestEntity,
          ],
          synchronize: true,
          logging: true,
        }
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class InfrastructureModule {}
