import { ApiProperty } from '@nestjs/swagger'

export class CreateCategoryDto {
	// @ApiProperty()
	// serviceId: string

	@ApiProperty()
	imageId: string

	@ApiProperty()
	name: string

	@ApiProperty()
	description: string
}
