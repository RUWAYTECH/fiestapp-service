import { GetAllReqDto } from '@common/dtos/get-all-req.dto';
import { RequestStatus } from '@g-prisma/index';
import { ApiProperty } from '@nestjs/swagger';

export class RequestGetAllReqDto extends GetAllReqDto {
	@ApiProperty()
	status?: RequestStatus;
}
