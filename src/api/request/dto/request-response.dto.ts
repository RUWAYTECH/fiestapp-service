import { ServiceResponseDto } from '@api/service/dto/service-response.dto'
import { UserResponseDto } from '@api/user/dto/user-response.dto'
import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class RequestResponseDto {
	@ApiProperty()
	@Expose()
	requestId: number

	@ApiProperty()
	@Expose()
	message: string

	@ApiProperty()
	@Expose()
	status: boolean

	@ApiProperty({ type: UserResponseDto })
	@Expose()
	user: UserResponseDto | null

	@ApiProperty({ type: ServiceResponseDto })
	@Expose()
	service: ServiceResponseDto | null
}
