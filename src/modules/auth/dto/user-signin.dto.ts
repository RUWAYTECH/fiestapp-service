import { AuthProviderEnum } from '@common/constants/auth-provider';
import { UserResDto } from '@modules/user/dto/responses/user-res.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CredentialSignInReqDto {
	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;
}

export class UserSignInResDto {
	@ApiProperty()
	token: string;

	@ApiProperty({ type: UserResDto })
	user: UserResDto;
}

export class ProviderSignInReqDto {
	@ApiProperty()
	token: string;

	@ApiProperty({ enum: AuthProviderEnum })
	provider: AuthProviderEnum;
}
