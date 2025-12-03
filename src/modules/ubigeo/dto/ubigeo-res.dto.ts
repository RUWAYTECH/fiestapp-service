import { ApiProperty } from '@nestjs/swagger';

export class UbigeoResDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	code: string;

	@ApiProperty()
	department: string;

	@ApiProperty()
	province: string;

	@ApiProperty()
	district: string;
}
