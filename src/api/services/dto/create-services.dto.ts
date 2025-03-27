import { ApiProperty } from '@nestjs/swagger'

export class CreateServicesDto {
	@ApiProperty()
	serviceId: string

	@ApiProperty()
	providerId: string

	@ApiProperty()
	categoryId: string

	@ApiProperty()
	name: string

	@ApiProperty()
	description: string

	@ApiProperty()
	priceMax: number

	@ApiProperty()
	priceMin: number

	@ApiProperty()
	score: number

	@ApiProperty()
	tag: number
}
