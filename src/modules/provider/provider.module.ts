import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { ProviderRepository } from './provider.repository';
import { DatabaseModule } from '@db/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [ProviderController],
	providers: [ProviderService, ProviderRepository]
})
export class ProviderModule {}
