import { ApiProperty } from '@nestjs/swagger'
import { UserResponseDto } from 'src/api/user/dto/user-response.dto'

export class ProviderResponseDto {
	@ApiProperty()
	id: string

	@ApiProperty()
	description: string

	@ApiProperty({ type: String })
	nameEnterprise: string

	@ApiProperty({ type: String })
	foto: string

	@ApiProperty({ type: Boolean })
	status: boolean

	@ApiProperty({ type: String })
	address: string

	@ApiProperty({ type: UserResponseDto })
	user: UserResponseDto | null
}
