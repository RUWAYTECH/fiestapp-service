import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { config } from '@conf/index';

@Module({
	imports: [
		MailerModule.forRootAsync({
			useFactory: () => ({
				transport: {
					host: config.mail.host,
					port: config.mail.port,
					secure: false,
					auth: {
						user: config.mail.user,
						pass: config.mail.password
					}
				},
				defaults: {
					from: `"No Reply" <${config.mail.fromAddress}>`
				},
				template: {
					dir: join(process.cwd(), 'src/modules/mail/templates'),
					adapter: new HandlebarsAdapter()
				}
			})
		})
	],
	providers: [MailService],
	exports: [MailService]
})
export class MailModule {}
