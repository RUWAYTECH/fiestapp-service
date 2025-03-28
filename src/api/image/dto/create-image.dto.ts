import { ApiProperty } from "@nestjs/swagger"

export class CreateImageDto {
    @ApiProperty()
    url: string

    @ApiProperty()
    name: string

    @ApiProperty()
    serviceId: string

    @ApiProperty()
    providerId: string

    @ApiProperty()
    categoryId: string
}
