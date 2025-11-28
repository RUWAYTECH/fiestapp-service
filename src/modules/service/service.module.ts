import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { ServiceRepository } from './service.repository';
import { DatabaseModule } from '@db/database.module';
import { CloudinaryService } from '@external/cloudinary.service';

@Module({
	imports: [DatabaseModule],
	controllers: [ServiceController],
	providers: [ServiceService, ServiceRepository, CloudinaryService]
})
export class ServiceModule {}
