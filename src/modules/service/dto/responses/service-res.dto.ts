import { ApiProperty } from '@nestjs/swagger';
import { ServiceCommonDto } from '../service-common.dto';
import { ProviderUserResDto } from '@modules/provider/dto/responses/provider-res.dto';
import { UbigeoResDto } from '@modules/ubigeo/dto/ubigeo-res.dto';

export class ServiceResDto extends ServiceCommonDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	score: number;

	@ApiProperty()
	provider: ProviderUserResDto;

	@ApiProperty({ type: [String] })
	images: string[];
}

export class ServiceWithAddressResDto extends ServiceResDto {
	@ApiProperty()
	address: string;
}

export class ServiceWithUbigeoResDto extends ServiceResDto {
	@ApiProperty({ type: [UbigeoResDto] })
	ubigeos: UbigeoResDto[];
}

export class ServiceListResDto extends ServiceResDto {}
