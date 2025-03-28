import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ProviderModule } from './provider/provider.module'
import { ServicesModule } from './services/services.module'
import { CategoriesModule } from './categories/categories.module'
import { FavoriteModule } from './favorite/favorite.module'
import { ImageModule } from './image/image.module'

@Module({
	imports: [
		AuthModule,
		UserModule,
		ProviderModule,
		ServicesModule,
		CategoriesModule,
		FavoriteModule,
		ImageModule,
	],
})
export class ApiModule {}
