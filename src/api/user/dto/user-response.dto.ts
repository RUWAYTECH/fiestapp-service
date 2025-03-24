import { ApiProperty } from '@nestjs/swagger'

export class UserResponseDto {
	@ApiProperty({ default: '', description: 'Identificador del usuario' })
	userId: string

	@ApiProperty({ default: '', description: 'Nombre del usuario' })
	name: string

	@ApiProperty({ default: '', description: 'Correo electronico del usuario' })
	email: string

	@ApiProperty({ default: '', description: 'Foto del usuario' })
	picture?: string

	@ApiProperty({ default: '', description: 'Telefono del usuario' })
	phone?: string
}
