import { ApiProperty } from '@nestjs/swagger'

export class SignInGoogleRequestDto {
	@ApiProperty()
	token: string
}
