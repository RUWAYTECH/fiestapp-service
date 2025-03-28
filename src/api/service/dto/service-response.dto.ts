import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class ServiceResponseDto {
	@ApiProperty()
	@Expose()
	serviceId: number

	@ApiProperty()
	@Expose()
	name: string

	@ApiProperty()
	@Expose()
	description: string

	@ApiProperty()
	@Expose()
	priceMax: number

	@ApiProperty()
	@Expose()
	priceMin: number

	@ApiProperty()
	@Expose()
	score: number

	@ApiProperty()
	@Expose()
	image: string[]

	@ApiProperty()
	@Expose()
	favorites: number[]

	@ApiProperty()
	@Expose()
	request: number[]
}
