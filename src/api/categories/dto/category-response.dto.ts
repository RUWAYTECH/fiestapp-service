import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class CategoryResponseDto {
	@ApiProperty()
	@Expose()
	categoryId: string

	@ApiProperty()
	@Expose()
	serviceId: string

	@ApiProperty()
	@Expose()
	imageId: string

	@ApiProperty()
	@Expose()
	name: string

	@ApiProperty()
	@Expose()
	description: string
}
