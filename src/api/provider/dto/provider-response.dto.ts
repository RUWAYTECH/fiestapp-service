import { ApiProperty } from '@nestjs/swagger'
import { UserResponseDto } from 'src/api/user/dto/user-response.dto'

export class ProviderResponseDto {
	@ApiProperty()
	id: string

	@ApiProperty()
	description: string

	@ApiProperty()
	user: UserResponseDto
}
