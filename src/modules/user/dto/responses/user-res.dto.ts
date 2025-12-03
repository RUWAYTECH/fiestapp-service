import { ApiProperty } from '@nestjs/swagger';
import { UserCommonDto } from '../user-common.dto';
import { UserRoleEnum } from '@common/constants/user-role';
import { ProviderResDto } from '@modules/provider/dto/responses/provider-res.dto';

export class UserResDto extends UserCommonDto {
	@ApiProperty()
	id: string;

	@ApiProperty({ enum: UserRoleEnum })
	declare role: UserRoleEnum;

	@ApiProperty()
	declare picture: string;
}

export class UserProfileResDto extends UserResDto {
	provider: ProviderResDto | null;
}
