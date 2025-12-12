import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailReqDto } from './dto/requests/create-mail-req.dto';

@Injectable()
export class MailService {
	constructor(private mailerService: MailerService) {}

	async sendEmailWithTemplate(email: string, data: CreateMailReqDto) {
		try {
			await this.mailerService.sendMail({
				to: email,
				subject: data.subject,
				template: 'mail-request-template',
				context: {
					name: data.name,
					subject: data.subject,
					totalPrice: data.totalPrice,
					services: data.services
				}
			});
			return { success: true };
		} catch (error) {
			console.error('Error enviando correo:', error);
			throw error;
		}
	}
}
