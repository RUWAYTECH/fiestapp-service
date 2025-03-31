import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class CreateServiceDto {
	@ApiProperty()
	providerId: number

	@ApiProperty()
	categoryId: number

	@ApiProperty()
	name: string

	@ApiProperty()
	description: string

	@ApiProperty()
	@IsOptional()
	address: string

	@ApiProperty()
	priceMax: number

	@ApiProperty()
	priceMin: number

	@ApiProperty()
	@IsOptional()
	score: number
}
