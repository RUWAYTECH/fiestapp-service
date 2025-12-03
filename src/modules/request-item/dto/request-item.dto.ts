import { ServiceResDto } from '@modules/service/dto/responses/service-res.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RequestItemDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	quantity: number;

	@ApiProperty()
	price: number;

	@ApiProperty()
	total: number;

	@ApiProperty()
	comment: string;

	@ApiProperty({ type: ServiceResDto })
	service: ServiceResDto;
}
