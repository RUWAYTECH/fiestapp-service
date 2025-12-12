import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
	imports: [
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				transport: {
					host: configService.get('MAIL_HOST'),
					port: configService.get('MAIL_PORT'),
					secure: false,
					auth: {
						user: configService.get('MAIL_USER'),
						pass: configService.get('MAIL_PASSWORD')
					}
				},
				defaults: {
					from: `"No Reply" <${configService.get('MAIL_FROM')}>`
				},
				template: {
					dir: join(process.cwd(), 'src/modules/mail/templates'),
					adapter: new HandlebarsAdapter()
				}
			}),
			inject: [ConfigService]
		})
	],
	providers: [MailService],
	exports: [MailService]
})
export class MailModule {}
