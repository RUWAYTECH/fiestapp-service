import { ApiProperty } from '@nestjs/swagger';
import { RequestCommonDto } from '../request-common.dto';
import { UserResDto } from '@modules/user/dto/responses/user-res.dto';
import { ProviderResDto } from '@modules/provider/dto/responses/provider-res.dto';
import { RequestStatus } from '@g-prisma/index';
import { RequestItemDto } from '@modules/request-item/dto/request-item.dto';
import { RequestPaymentDto } from '@modules/request-payment/dto/request-payment.dto';

export class RequestResDto extends RequestCommonDto {
	@ApiProperty()
	id: string;

	@ApiProperty({ type: UserResDto })
	user: UserResDto;

	@ApiProperty({ type: ProviderResDto })
	provider: ProviderResDto;

	@ApiProperty({ enum: RequestStatus })
	status: RequestStatus;

	@ApiProperty()
	finalPrice: number | null;

	@ApiProperty({ type: Date })
	createdAt: Date;

	@ApiProperty({ type: RequestPaymentDto })
	payment: RequestPaymentDto | null;
}

export class RequestWithItemsResDto extends RequestResDto {
	@ApiProperty({ type: RequestItemDto, isArray: true })
	items: RequestItemDto[];
}
