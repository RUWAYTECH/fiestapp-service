import { Public } from '@common/decorators/public.decorator';
import { ResponseDoc } from '@common/decorators/response-doc.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialSignInReqDto, ProviderSignInReqDto, UserSignInResDto } from './dto/user-signin.dto';
import { CredentialSignUpReqDto } from './dto/user-signup.dto';
import { ApiTags } from '@nestjs/swagger';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AuthUser } from '@common/decorators/auth.decorator';
import { Roles } from '@common/decorators/role.decorator';
import { UserRoleEnum } from '@common/constants/user-role';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('signin')
	@Public()
	@ResponseDoc(UserSignInResDto)
	signInWithCredentials(@Body() data: CredentialSignInReqDto) {
		return this.authService.credentialSignIn(data);
	}

	@Post('signup')
	@Public()
	@ResponseDoc(UserSignInResDto)
	signUpWithCredentials(@Body() data: CredentialSignUpReqDto) {
		return this.authService.credentialSignUp(data);
	}

	@Post('oauth-signin')
	@Public()
	@ResponseDoc(UserSignInResDto)
	signInWithSocial(@Body() data: ProviderSignInReqDto) {
		return this.authService.socialSignIn(data.token, data.provider);
	}

	@Post('change-password')
	@ResponseDoc(null)
	@Roles(UserRoleEnum.USER)
	changePassword(@Body() data: ChangePasswordDto, @AuthUser('sub') userId: string) {
		return this.authService.changePassword(data, userId);
	}
}
