import { ProviderResDto } from '@modules/provider/dto/responses/provider-res.dto';
import { RequestItemDto } from '@modules/request-item/dto/request-item.dto';
import { RequestPaymentDto } from '@modules/request-payment/dto/request-payment.dto';
import { RequestStatusEnum } from '@modules/request/constants/request-status';
import { UserResDto } from '@modules/user/dto/responses/user-res.dto';
import { ApiProperty } from '@nestjs/swagger';
import { RequestCommonDto } from '../request-common.dto';

export class RequestResDto extends RequestCommonDto {
	@ApiProperty()
	id: string;

	@ApiProperty({ type: UserResDto })
	user: UserResDto;

	@ApiProperty({ type: ProviderResDto })
	provider: ProviderResDto;

	@ApiProperty({ enum: RequestStatusEnum })
	status: RequestStatusEnum;

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
