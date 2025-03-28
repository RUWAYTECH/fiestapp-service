import { UtilMapper } from '../../common/utils/util-mapper'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServiceController } from './service.controller'
import { ServiceValidator } from './validator/service-validator'
import { ServiceService } from './service.service'
import { ProviderEntity } from '@entities/provider.entity'
import { CategoryEntity } from '@entities/category.entity'
import { ServiceRepository } from '@repositories/service.repository'
import { ServiceEntity } from '@entities/service.entity'
import { injectionTokens } from '@repositories/injection-tokens'

@Module({
	imports: [TypeOrmModule.forFeature([ServiceEntity])],
	controllers: [ServiceController],
	providers: [
		ServiceValidator,
		UtilMapper,
		ServiceService,
		ProviderEntity,
		CategoryEntity,
		{
			provide: injectionTokens.serviceRepository,
			useClass: ServiceRepository,
		},
	],
})
export class ServiceModule {}
