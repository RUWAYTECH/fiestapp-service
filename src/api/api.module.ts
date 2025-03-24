import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ProviderModule } from './provider/provider.module'

@Module({
	imports: [AuthModule, UserModule, ProviderModule],
})
export class ApiModule {}
