import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UtilMapper } from '@utils/util-mapper'
import { injectionTokens } from '@repositories/injection-tokens'
import { FavoriteEntity } from '@entities/favorite.entity'
import { FavoriteService } from './favorite.service'
import { FavoriteValidator } from './validator/favorite-validator'
import { FavoriteRepository } from '@repositories/favorite.repository'
import { FavoriteController } from './favorite.controller'

@Module({
    imports: [TypeOrmModule.forFeature([FavoriteEntity])],
    controllers: [FavoriteController],
    providers: [
        FavoriteService,
        FavoriteValidator,
        UtilMapper,
        {
            provide: injectionTokens.favoriteRepository,
            useClass: FavoriteRepository,
        },
    ],
    exports: [
        FavoriteService,
        injectionTokens.favoriteRepository,
        TypeOrmModule,
        UtilMapper,
    ],
})
export class FavoriteModule {}
