import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoryCommonDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiPropertyOptional()
	image: string;
}
