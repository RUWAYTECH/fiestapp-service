import { ApiProperty } from '@nestjs/swagger';

export class UserSyncProviderReqDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	picture: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	address: string;

	@ApiProperty()
	phone: string;

	@ApiProperty()
	website: string;

	@ApiProperty()
	facebook: string;

	@ApiProperty()
	instagram: string;
}
