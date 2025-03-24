import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { SingInRequestDto } from './dto/sing-in-request.dto'
import { SignInGoogleRequestDto } from './dto/sign-in-google-request.dto'
import { ResponseDto } from '@dto/response.dto'
import { AuthResponseDto } from './dto/auth-response.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	@ApiOperation({ summary: 'Sign in with credentials' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<AuthResponseDto>,
	})
	signIn(@Body() signInDto: SingInRequestDto) {
		return this.authService.signIn(signInDto.email, signInDto.password)
	}

	@HttpCode(HttpStatus.OK)
	@Post('login/google')
	@ApiOperation({ summary: 'Sign in with Google' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<AuthResponseDto>,
	})
	signInWithGoogle(@Body() { token }: SignInGoogleRequestDto) {
		return this.authService.signInWithGoogle(token)
	}
}
