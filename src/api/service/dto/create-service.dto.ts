import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class CreateServiceDto {
	@ApiProperty()
	providerId: string

	@ApiProperty()
	categoryId: string

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

	@ApiProperty()
	@IsOptional()
	image: string[]

	@ApiProperty()
	@IsOptional()
	favorites: number[]

	@ApiProperty()
	@IsOptional()
	request: number[]
}
