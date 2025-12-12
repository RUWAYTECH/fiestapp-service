import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ModulesModule } from '@modules/modules.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@common/gaurds/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ModulesModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true })],
	controllers: [AppController],
	providers: [
		AppService,
		JwtService,
		{
			provide: APP_GUARD,
			useClass: AuthGuard
		}
	]
})
export class AppModule {}
