import { ApiProperty } from '@nestjs/swagger';
import { ProviderCommonDto } from '../provider-common.dto';
import { UserResDto } from '@modules/user/dto/responses/user-res.dto';

export class ProviderResDto extends ProviderCommonDto {
	@ApiProperty()
	id: string;
}

export class ProviderUserResDto extends ProviderResDto {
	@ApiProperty()
	user: UserResDto;
}
