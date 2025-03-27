// import { Injectable } from '@nestjs/common'
// import { ServicesResponseDto } from '../dto/services-response.dto'
// import { CreateServicesDto } from '../dto/create-services.dto'

// @Injectable()
// export class ServicesProfile extends AutomapperProfile {
// 	constructor(@InjectMapper() mapper: Mapper) {
// 		super(mapper)
// 	}

// 	override get profile() {
// 		return (mapper) => {
// 			createMap(mapper, ServiceEntity, ServicesResponseDto)
// 			createMap(mapper, CreateServicesDto, ServiceEntity)
// 		}
// 	}
// }
