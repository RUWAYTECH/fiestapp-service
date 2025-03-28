import { ApiProperty } from '@nestjs/swagger'

export class CreateRequestDto {
	@ApiProperty()
	serviceId: number

	@ApiProperty()
	message: string

	@ApiProperty()
	status: boolean

	@ApiProperty()
	userId: number
}
