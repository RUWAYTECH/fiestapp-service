import { RequestCommonDto } from '../request-common.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RequestCotizationItemReqDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	quantity: number;
}

export class RequestCotizationReqDto extends RequestCommonDto {
	@ApiProperty({ type: RequestCotizationItemReqDto, isArray: true })
	items: RequestCotizationItemReqDto[];
}
