import { ApiProperty } from '@nestjs/swagger';
import { ResponseMessageDto } from './response-message.dto';
import { PaginationDto } from './pagination.dto';

export class ResponseDto<T> {
	@ApiProperty({ type: Object })
	data: T;

	@ApiProperty({ type: [ResponseMessageDto] })
	messages: ResponseMessageDto[];
}

export class PaginatedResponseDto<T> extends ResponseDto<T> {
	@ApiProperty({ type: PaginationDto })
	pageOptions: PaginationDto;
}
