import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ServiceModule } from './service/service.module';
import { ProviderModule } from './provider/provider.module';
import { UbigeoModule } from './ubigeo/ubigeo.module';
import { RequestModule } from './request/request.module';
import { MailModule } from './mail/mail.module';

@Module({
	imports: [
		AuthModule,
		UserModule,
		CategoryModule,
		ServiceModule,
		ProviderModule,
		UbigeoModule,
		RequestModule,
		MailModule
	]
})
export class ModulesModule {}
