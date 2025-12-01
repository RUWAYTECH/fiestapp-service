import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseDoc } from '@common/decorators/response-doc.decorator';
import { Roles } from '@common/decorators/role.decorator';
import { UserRoleEnum } from '@common/constants/user-role';
import { ZodValidationPipe } from '@common/pipes/zod-validation.pipe';
import { userSyncProviderSchema } from './validators/user-sync-provider.schema';
import { UserSyncProviderReqDto } from './dto/requests/user-sync-provider-req.dto,';
import { AuthUser } from '@common/decorators/auth.decorator';
import { UserProfileResDto } from './dto/responses/user-res.dto';

@Controller('users')
@ApiTags('User')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@ResponseDoc(UserProfileResDto)
	@Roles(UserRoleEnum.USER, UserRoleEnum.ADMIN)
	async profile(@AuthUser('sub') userId: string) {
		return this.userService.profile(userId);
	}

	@Post('sync-provider')
	@ResponseDoc(null)
	@Roles(UserRoleEnum.USER)
	async syncProvider(
		@Body(new ZodValidationPipe(userSyncProviderSchema)) data: UserSyncProviderReqDto,
		@AuthUser('sub') userId: string
	) {
		return this.userService.syncProvider(userId, data);
	}
}
