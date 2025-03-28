import { ImageEntity } from "@entities/image.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";
import { ImageValidator } from "./validator/image-validator";
import { injectionTokens } from "@repositories/injection-tokens";
import { ImageRepository } from "@repositories/image.repository";
import { UtilMapper } from "@utils/util-mapper";

@Module({
    imports: [TypeOrmModule.forFeature([ImageEntity])],
    controllers: [ImageController],
    providers: [
        ImageService,
        ImageValidator,
        UtilMapper,
        {
            provide: injectionTokens.imageRepository,
            useClass: ImageRepository,
        },
    ],
    exports: [
        ImageService,
        injectionTokens.imageRepository,
        TypeOrmModule,
        UtilMapper,
    ],
})
export class ImageModule {}