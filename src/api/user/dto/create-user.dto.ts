import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateUserDto {
	@ApiProperty()
	name: string

	@ApiProperty()
	email: string

	@ApiPropertyOptional()
	picture?: string

	@ApiProperty()
	password: string

	@ApiPropertyOptional()
	phone?: string

	typeUser?: string
}
