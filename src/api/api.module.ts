import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ProviderModule } from './provider/provider.module'
import { ServicesModule } from './services/services.module'
import { CategoriesModule } from './categories/categories.module'

@Module({
	imports: [
		AuthModule,
		UserModule,
		ProviderModule,
		ServicesModule,
		CategoriesModule,
	],
})
export class ApiModule {}
