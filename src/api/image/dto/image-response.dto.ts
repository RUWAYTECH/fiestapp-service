import { CategoryResponseDto } from "@api/categories/dto/category-response.dto"
import { ProviderResponseDto } from "@api/provider/dto/provider-response.dto"
import { ServicesResponseDto } from "@api/services/dto/services-response.dto"
import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"

export class ImageResponseDto {
    @ApiProperty()
    @Expose()
    imageId: string

    @ApiProperty()
    @Expose()
    url: string

    @ApiProperty()
    @Expose()
    name: string

    @ApiProperty({ type: ServicesResponseDto })
    @Expose()
    service: ServicesResponseDto

    @ApiProperty({ type: ProviderResponseDto })
    @Expose()
    provider: ProviderResponseDto

    @ApiProperty({ type: CategoryResponseDto })
    @Expose()
    category: CategoryResponseDto
}