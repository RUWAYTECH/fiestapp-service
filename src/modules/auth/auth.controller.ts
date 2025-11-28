import { Public } from '@common/decorators/public.decorator';
import { ResponseDoc } from '@common/decorators/response-doc.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialSignInReqDto, ProviderSignInReqDto, UserSignInResDto } from './dto/user-signin.dto';
import { CredentialSignUpReqDto } from './dto/user-signup.dto';
import { ApiTags } from '@nestjs/swagger';

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
}
