import { ApiProperty } from '@nestjs/swagger';

export class RequestRespondItemReqDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	priceFinal: number;

	@ApiProperty()
	comment: string;
}

export class RequestRespondReqDto {
	@ApiProperty({ type: [RequestRespondItemReqDto] })
	items: RequestRespondItemReqDto[];
}
