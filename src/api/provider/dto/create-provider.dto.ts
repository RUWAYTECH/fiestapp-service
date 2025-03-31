import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class CreateProviderDto {
	@ApiProperty()
	description: string

	@ApiProperty()
	nameEnterprise: string

	@ApiProperty()
	foto: string

	@ApiProperty()
	status: boolean

	@ApiProperty()
	address: string

	@ApiProperty()
	userId: number
}
