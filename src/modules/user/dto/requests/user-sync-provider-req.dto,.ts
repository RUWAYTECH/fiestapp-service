import { ApiProperty } from '@nestjs/swagger';

export class UserSyncProviderReqDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	picture: string | null;

	@ApiProperty()
	email: string;

	@ApiProperty()
	address: string;

	@ApiProperty()
	phone: string;

	@ApiProperty()
	website: string | null;

	@ApiProperty()
	facebook: string | null;

	@ApiProperty()
	instagram: string | null;
}
