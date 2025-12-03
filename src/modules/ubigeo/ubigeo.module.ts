import { Module } from '@nestjs/common';
import { UbigeoService } from './ubigeo.service';
import { UbigeoController } from './ubigeo.controller';
import { UbigeoRepository } from './ubigeo.repository';
import { DatabaseModule } from '@db/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [UbigeoController],
	providers: [UbigeoService, UbigeoRepository]
})
export class UbigeoModule {}
