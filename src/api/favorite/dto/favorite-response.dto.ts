import { CategoryResponseDto } from '@api/categories/dto/category-response.dto'
import { UserResponseDto } from '@api/user/dto/user-response.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Expose } from 'class-transformer'

export class FavoriteResponseDto {
    @ApiProperty()
    @Expose()
    favoriteId: string

    @ApiProperty({ type: CategoryResponseDto })
    @Expose()
    category: CategoryResponseDto 

    @ApiProperty({ type: UserResponseDto })
    @Expose()
    user: UserResponseDto | null
}
