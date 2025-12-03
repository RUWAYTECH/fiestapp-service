import { GetAllReqDto } from '@common/dtos/get-all-req.dto';
import { ApiProperty } from '@nestjs/swagger';

export enum ServiceGetAllSortByEnum {
	PRICE = 'PRICE',
	RATING = 'RATING',
	CREATED_AT = 'CREATED_AT'
}

export class ServiceGetAllReqDto extends GetAllReqDto {
	@ApiProperty({ type: [String] })
	categoryId?: string | string[];

	@ApiProperty()
	providerId?: string;

	@ApiProperty({ type: [String] })
	ubigeoId?: string | string[];

	@ApiProperty({ enum: ServiceGetAllSortByEnum })
	sortBy?: ServiceGetAllSortByEnum;

	@ApiProperty()
	status?: boolean;
}
