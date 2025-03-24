import { ApiProperty } from '@nestjs/swagger'

export class SingInRequestDto {
	@ApiProperty()
	email: string

	@ApiProperty()
	password: string
}
