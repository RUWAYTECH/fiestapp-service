import { UtilMapper } from '../../common/utils/util-mapper'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServicesController } from './services.controller'
import { ServicesValidator } from './validator/services-validator'
import { ServicesService } from './services.service'
//import { ServicesProfile } from './mapper/ServicesProfile'
import { ProviderEntity } from '@entities/provider.entity'
import { CategoryEntity } from '@entities/category.entity'
import { ServicesRepository } from '@repositories/services.repository'
import { ServiceEntity } from '@entities/service.entity'
import { injectionTokens } from '@repositories/injection-tokens'

@Module({
	imports: [TypeOrmModule.forFeature([ServiceEntity])],
	controllers: [ServicesController],
	providers: [
		ServicesValidator,
		//ServicesProfile,
		UtilMapper,
		ServicesService,
		ProviderEntity,
		CategoryEntity,
		{
			provide: injectionTokens.servicesRepository,
			useClass: ServicesRepository,
		},
	],
})
export class ServicesModule {}
