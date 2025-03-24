import { Module } from '@nestjs/common'
import { ProviderService } from './provider.service'
import { ProviderController } from './provider.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProviderValidator } from './validator/provider-validator'
import { ProviderEntity } from '@entities/provider.entity'
import { UtilMapper } from '@utils/util-mapper'
import { injectionTokens } from '@repositories/injection-tokens'
import { ProviderRepository } from '@repositories/provider.repository'

@Module({
	imports: [TypeOrmModule.forFeature([ProviderEntity])],
	controllers: [ProviderController],
	providers: [
		ProviderService,
		ProviderValidator,
		UtilMapper,
		{
			provide: injectionTokens.providerRepository,
			useClass: ProviderRepository,
		},
	],
	exports: [
		ProviderService,
		injectionTokens.providerRepository,
		TypeOrmModule,
		UtilMapper,
	],
})
export class ProviderModule {}
