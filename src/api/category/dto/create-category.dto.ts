import { ApiProperty } from '@nestjs/swagger'

export class CreateCategoryDto {
	// @ApiProperty()
	// serviceId: string

	@ApiProperty()
	imageId: number

	@ApiProperty()
	name: string

	@ApiProperty()
	description: string

	@ApiProperty()
	serviceId: number
}
