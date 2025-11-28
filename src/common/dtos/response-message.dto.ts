import { ApiProperty } from '@nestjs/swagger';

export enum ResponseMessageEnum {
	SUCCESS,
	ERROR,
	WARNING,
	INFO
}

export class ResponseMessageDto {
	@ApiProperty()
	message: string;

	@ApiProperty({ enum: ResponseMessageEnum })
	type: ResponseMessageEnum;
}
