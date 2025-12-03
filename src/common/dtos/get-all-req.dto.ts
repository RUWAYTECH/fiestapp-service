import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetAllReqDto {
	@ApiPropertyOptional()
	search?: string;

	@ApiPropertyOptional()
	page?: number;

	@ApiPropertyOptional()
	pageSize?: number;
}
