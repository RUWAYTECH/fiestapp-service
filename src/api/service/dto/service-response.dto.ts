import { CategoryResponseDto } from '@api/category/dto/category-response.dto'
import { ProviderResponseDto } from '@api/provider/dto/provider-response.dto'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'

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
	address: string

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
	images: string[]

	@ApiProperty()
	@Expose()
	favorites: number[]

	@ApiProperty()
	@Expose()
	requests: number[]

	@ApiProperty({ type: () => ProviderResponseDto })
	@Expose()
	@Type(() => ProviderResponseDto)
	provider: ProviderResponseDto

	// 🔥 Cambia category a un objeto en lugar de un array de strings
	@ApiProperty({ type: () => CategoryResponseDto })
	@Expose()
	@Type(() => CategoryResponseDto)
	category: CategoryResponseDto
}
