import { Injectable } from '@nestjs/common'
import { ResponseDto } from '../../common/dto/response.dto'
import { severityStatusEnum } from '@constants/severity-status.enum'

@Injectable()
export class BaseService {
	notFound = () => {
		return new ResponseDto(
			null,
			'No existe el registro',
			severityStatusEnum.Error,
		)
	}
	toResponse = <T>(
		data: T | null = null,
		resultValidation: object | null = null,
	) => {
		return new ResponseDto(
			data,
			'',
			severityStatusEnum.Success,
			resultValidation,
		)
	}
}
