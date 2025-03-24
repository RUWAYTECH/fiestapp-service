import { ApiProperty } from '@nestjs/swagger'
import { UserResponseDto } from '@api/user/dto/user-response.dto'

export class AuthResponseDto {
	@ApiProperty()
	accessToken: string

	@ApiProperty()
	user: UserResponseDto
}
