import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { RequestRepository } from './request.repository';
import { DatabaseModule } from '@db/database.module';
import { ServiceRepository } from '@modules/service/service.repository';

@Module({
	imports: [DatabaseModule],
	controllers: [RequestController],
	providers: [RequestService, RequestRepository, ServiceRepository]
})
export class RequestModule {}
