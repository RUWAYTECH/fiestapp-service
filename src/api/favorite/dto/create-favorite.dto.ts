import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateFavoriteDto {
    @ApiProperty()
	serviceId: string

	@ApiProperty()
	userId: string
}
