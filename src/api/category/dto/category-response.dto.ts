import { ImageResponseDto } from '@api/image/dto/image-response.dto'
import { ServiceResponseDto } from '@api/service/dto/service-response.dto'
import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class CategoryResponseDto {
	@ApiProperty()
	@Expose()
	categoryId: number

	@ApiProperty({ type: ServiceResponseDto })
	@Expose()
	service: ServiceResponseDto | null

	@ApiProperty({ type: ImageResponseDto })
	@Expose()
	image: ImageResponseDto | null

	@ApiProperty()
	@Expose()
	name: string

	@ApiProperty()
	@Expose()
	description: string
}
