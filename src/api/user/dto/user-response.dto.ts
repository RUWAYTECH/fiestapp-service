import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class UserResponseDto {
	@ApiProperty({ default: '', description: 'Identificador del usuario' })
	@Expose()
	userId: string

	@ApiProperty({ default: '', description: 'Nombre del usuario' })
	@Expose()
	name: string

	@ApiProperty({ default: '', description: 'Correo electronico del usuario' })
	@Expose()
	email: string

	@ApiProperty({ default: '', description: 'Foto del usuario' })
	@Expose()
	picture?: string

	@ApiProperty({ default: '', description: 'Telefono del usuario' })
	@Expose()
	phone?: string
}
