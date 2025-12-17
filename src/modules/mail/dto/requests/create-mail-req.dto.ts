import { ServiceRequestMailReqDto } from './service-request-mail-req.dto';

export class CreateMailReqDto {
	name: string;
	subject: string;
	totalPrice: number;
	comment?: string;
	services: ServiceRequestMailReqDto[];
}
