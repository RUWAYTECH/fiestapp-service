import { ApiProperty } from '@nestjs/swagger';

export class RequestPaymentDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	amount: number;

	@ApiProperty()
	method: string;

	@ApiProperty()
	image: string;

	@ApiProperty()
	transferNumber: string;

	@ApiProperty()
	paidAt: Date;
}
