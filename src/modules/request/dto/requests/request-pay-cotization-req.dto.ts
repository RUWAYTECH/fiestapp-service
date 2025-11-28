import { ApiProperty } from '@nestjs/swagger';

export class RequestPayCotizationReqDto {
	@ApiProperty()
	method: string;

	@ApiProperty()
	operationNumber: string;

	@ApiProperty()
	image: string;

	@ApiProperty()
	amount: number;
}
