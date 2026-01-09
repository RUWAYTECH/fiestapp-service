import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailRequestCreatedDto, MoreInfo } from './dto/mail-request-created.dto';
import { config } from '@conf/index';

@Injectable()
export class MailService {
	private company = {
		name: 'FiestApp',
		logoUrl: config.company.logoUrl
	};

	constructor(private mailerService: MailerService) {}

	async sendRequestCreatedEmail(
		to: string,
		toName: string,
		subject: string,
		data: { order: MailRequestCreatedDto; moreInfo?: MoreInfo[] },
		description = 'Hemos recibido tu solicitud de cotización y pronto nos pondremos en contacto contigo.'
	) {
		const emailData = {
			subtitle: description,
			company: this.company,
			order: data.order,
			toName: toName,
			moreInfo: data.moreInfo
		};

		await this.mailerService.sendMail({
			to: to,
			subject: subject,
			template: 'mail-request-created',
			context: emailData
		});
	}
}
