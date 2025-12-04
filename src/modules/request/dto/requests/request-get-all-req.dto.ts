import { GetAllReqDto } from '@common/dtos/get-all-req.dto';
import { RequestStatusEnum } from '@modules/request/constants/request-status';
import { ApiProperty } from '@nestjs/swagger';

export class RequestGetAllReqDto extends GetAllReqDto {
	@ApiProperty({ enum: RequestStatusEnum })
	status?: RequestStatusEnum;
}
