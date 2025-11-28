import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
	@ApiProperty()
	page: number;

	@ApiProperty()
	pageSize: number;

	@ApiProperty()
	totalRows: number;

	@ApiProperty()
	totalPages: number;
}
