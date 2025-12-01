import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { RequestRepository } from './request.repository';
import { DatabaseModule } from '@db/database.module';
import { ServiceRepository } from '@modules/service/service.repository';
import { RequestProviderController } from './request-provider.controller';
import { RequestProviderService } from './request-provider.service';

@Module({
	imports: [DatabaseModule],
	controllers: [RequestController, RequestProviderController],
	providers: [RequestService, RequestProviderService, RequestRepository, ServiceRepository]
})
export class RequestModule {}
