import { ApiProperty } from '@nestjs/swagger';
import { UserCommonDto } from '../user-common.dto';
import { UserRoleEnum } from '@common/constants/user-role';

export class UserResDto extends UserCommonDto {
	@ApiProperty()
	id: string;

	@ApiProperty({ enum: UserRoleEnum })
	declare role: UserRoleEnum;

	@ApiProperty()
	declare picture: string;
}
