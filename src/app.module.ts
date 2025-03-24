import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { ApiModule } from './api/api.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { jwtConstants } from './common/constants/jwt-constants'
import configuration from './config/configuration'
import { InfraestructureModule } from './infraestructure/infraestructure.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env'],
			load: [configuration],
		}),
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: configuration().tokenExpiration },
		}),
		InfraestructureModule,
		ApiModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
