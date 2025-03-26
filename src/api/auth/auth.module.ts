import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'
import { AuthValidator } from './validators/auth-validator'

@Module({
	imports: [UserModule],
	controllers: [AuthController],
	providers: [AuthService, AuthValidator],
	exports: [AuthService],
})
export class AuthModule {}
