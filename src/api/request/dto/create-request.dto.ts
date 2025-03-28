import { ApiProperty } from '@nestjs/swagger'

export class CreateRequestDto {
	@ApiProperty()
	service: number

	@ApiProperty()
	message: string

	@ApiProperty()
	status: boolean

	@ApiProperty()
	user: number
}
