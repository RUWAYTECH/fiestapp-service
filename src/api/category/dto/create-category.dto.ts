import { ApiProperty } from '@nestjs/swagger'

export class CreateCategoryDto {
	@ApiProperty()
	categoryId: string

	@ApiProperty()
	serviceId: string

	@ApiProperty()
	imageId: string

	@ApiProperty()
	name: string

	@ApiProperty()
	description: string
}
