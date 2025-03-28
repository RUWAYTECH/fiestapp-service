import { CategoryResponseDto } from "@api/category/dto/category-response.dto"
import { ProviderResponseDto } from "@api/provider/dto/provider-response.dto"
import { ServiceResponseDto } from "@api/service/dto/service-response.dto"
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

    @ApiProperty({ type: ServiceResponseDto })
    @Expose()
    service: ServiceResponseDto

    @ApiProperty({ type: ProviderResponseDto })
    @Expose()
    provider: ProviderResponseDto

    @ApiProperty({ type: CategoryResponseDto })
    @Expose()
    category: CategoryResponseDto
}
