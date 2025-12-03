import { ApiProperty } from '@nestjs/swagger';
import { CategoryCommonDto } from '../category-common.dto';

export class CategoryResDto extends CategoryCommonDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	declare image: string;
}

export class CategoryListResDto extends CategoryResDto {}
