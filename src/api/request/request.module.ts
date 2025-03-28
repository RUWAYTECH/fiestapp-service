import { UtilMapper } from '../../common/utils/util-mapper'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RequestController } from './request.controller'
import { RequestValidator } from './validator/request-validator'
import { RequestService } from './request.service'
import { RequestRepository } from '@repositories/request.repository'
import { injectionTokens } from '@repositories/injection-tokens'
import { RequestEntity } from '@entities/request.entity'

@Module({
	imports: [TypeOrmModule.forFeature([RequestEntity])],
	controllers: [RequestController],
	providers: [
		RequestValidator,
		UtilMapper,
		RequestService,
		{
			provide: injectionTokens.requestRepository,
			useClass: RequestRepository,
		},
	],
})
export class RequestModule {}
