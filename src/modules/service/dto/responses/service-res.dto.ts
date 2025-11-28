import { ApiProperty } from '@nestjs/swagger';
import { ServiceCommonDto } from '../service-common.dto';
import { ProviderUserResDto } from '@modules/provider/dto/responses/provider-res.dto';

export class ServiceResDto extends ServiceCommonDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	provider: ProviderUserResDto;

	@ApiProperty({ type: [String] })
	images: string[];
}

export class ServiceListResDto extends ServiceResDto {}
