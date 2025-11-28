import { ApiProperty } from '@nestjs/swagger';

export class ServiceCommonDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	priceMin: number;

	@ApiProperty()
	priceMax: number;

	@ApiProperty()
	duration?: number;

	@ApiProperty()
	status: boolean;

	@ApiProperty()
	categoryId: string;
}
