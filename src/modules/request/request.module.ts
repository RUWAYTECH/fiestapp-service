import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { RequestRepository } from './request.repository';
import { DatabaseModule } from '@db/database.module';
import { ServiceRepository } from '@modules/service/service.repository';
import { RequestProviderController } from './request-provider.controller';
import { RequestProviderService } from './request-provider.service';
import { UserRepository } from '@modules/user/user.repository';
import { MailService } from '@modules/mail/mail.service';

@Module({
	imports: [DatabaseModule],
	controllers: [RequestController, RequestProviderController],
	providers: [RequestService, RequestProviderService, RequestRepository, ServiceRepository, UserRepository, MailService]
})
export class RequestModule {}
