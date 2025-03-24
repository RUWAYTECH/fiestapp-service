import { ApiProperty } from '@nestjs/swagger'

export class CreateProviderDto {
	@ApiProperty()
	description: string
}
