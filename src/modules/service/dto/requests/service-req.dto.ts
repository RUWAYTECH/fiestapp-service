import { ApiProperty } from '@nestjs/swagger';
import { ServiceCommonDto } from '../service-common.dto';

export class ServiceCreateReqDto extends ServiceCommonDto {
	@ApiProperty()
	providerId: string;

	@ApiProperty()
	ubigeoIds: string[];

	@ApiProperty()
	imageUrls: string[];
}

export class ServiceUserCreateReqDto extends ServiceCommonDto {
	@ApiProperty()
	ubigeoIds: string[];

	@ApiProperty()
	imageUrls: string[];
}
