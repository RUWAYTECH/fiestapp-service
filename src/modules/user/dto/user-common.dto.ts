import { UserRoleEnum } from '@common/constants/user-role';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserCommonDto {
	@ApiProperty()
	email: string;

	@ApiProperty()
	name: string;

	@ApiPropertyOptional({ enum: UserRoleEnum })
	role?: UserRoleEnum;

	@ApiPropertyOptional()
	picture?: string;
}
