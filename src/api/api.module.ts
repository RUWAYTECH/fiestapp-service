import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { ProviderModule } from './provider/provider.module'
import { ServiceModule } from './service/service.module'
import { CategoryModule } from './category/category.module'
import { RequestModule } from './request/request.module'
import { FavoriteModule } from './favorite/favorite.module'
import { ImageModule } from './image/image.module'

@Module({
	imports: [
		AuthModule,
		UserModule,
		ProviderModule,
		ServiceModule,
		CategoryModule,
		RequestModule,
		ServiceModule,
		CategoryModule,
		FavoriteModule,
		ImageModule,
	],
})
export class ApiModule {}
