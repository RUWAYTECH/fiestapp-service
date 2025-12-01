import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { ServiceRepository } from './service.repository';
import { DatabaseModule } from '@db/database.module';
import { CloudinaryService } from '@external/cloudinary.service';
import { ProviderServiceService } from './provider-service.service';
import { ProviderServiceController } from './provider-service.controller';

@Module({
	imports: [DatabaseModule],
	controllers: [ServiceController, ProviderServiceController],
	providers: [ServiceService, ServiceRepository, CloudinaryService, ProviderServiceService]
})
export class ServiceModule {}
