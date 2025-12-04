import { GetAllReqDto } from '@common/dtos/get-all-req.dto';
import { RequestStatus } from '@g-prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RequestGetAllReqDto extends GetAllReqDto {
	@ApiProperty()
	status?: RequestStatus;
}
