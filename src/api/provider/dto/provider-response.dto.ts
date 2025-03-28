import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { UserResponseDto } from 'src/api/user/dto/user-response.dto'

export class ProviderResponseDto {
	@ApiProperty()
	@Expose()
	providerId: string

	@ApiProperty()
	@Expose()
	description: string

	@ApiProperty({ type: String })
	@Expose()
	nameEnterprise: string

	@ApiProperty({ type: String })
	@Expose()
	foto: string

	@ApiProperty({ type: Boolean })
	@Expose()
	status: boolean

	@ApiProperty({ type: String })
	@Expose()
	address: string

	@ApiProperty({ type: UserResponseDto })
	@Expose()
	user: UserResponseDto | null
}
