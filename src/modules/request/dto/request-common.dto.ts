import { ApiProperty } from '@nestjs/swagger';

export class RequestCommonDto {
	@ApiProperty()
	guestQty: number;

	@ApiProperty()
	budgetAmount: number;

	@ApiProperty({ type: Date })
	eventDate: Date;

	@ApiProperty()
	comment: string;
}
