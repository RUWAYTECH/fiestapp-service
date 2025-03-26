import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { SignInRequestDto } from './dto/sign-in-request.dto'
import { SignInGoogleRequestDto } from './dto/sign-in-google-request.dto'
import { ResponseDto } from '@dto/response.dto'
import { AuthResponseDto } from './dto/auth-response.dto'
import { SignUpRequestDto } from './dto/sign-up-request.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post('register')
	@ApiOperation({ summary: 'Sign up with credentials' })
	@ApiResponse({
		status: 201,
		type: ResponseDto<AuthResponseDto>,
	})
	signUp(@Body() data: SignUpRequestDto) {
		return this.authService.signUp(data)
	}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	@ApiOperation({ summary: 'Sign in with credentials' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<AuthResponseDto>,
	})
	signIn(@Body() data: SignInRequestDto) {
		return this.authService.signIn(data.email, data.password)
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
