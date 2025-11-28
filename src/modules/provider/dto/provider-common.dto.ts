import { ApiProperty } from '@nestjs/swagger';

export class ProviderCommonDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	picture: string;

	@ApiProperty()
	address: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	website: string;

	@ApiProperty()
	phone: string;

	@ApiProperty()
	facebook: string;

	@ApiProperty()
	instagram: string;

	@ApiProperty()
	status: boolean;
}
