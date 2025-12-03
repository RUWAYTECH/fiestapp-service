import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from '@db/database.module';
import { UserModule } from '@modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from '@conf/index';

@Module({
	imports: [
		DatabaseModule,
		UserModule,
		JwtModule.registerAsync({
			useFactory: () => ({
				secret: config.jwt.secret,
				signOptions: { expiresIn: config.jwt.expirationTime }
			})
		})
	],
	controllers: [AuthController],
	providers: [AuthService]
})
export class AuthModule {}
