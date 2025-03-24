import { ApiProperty } from '@nestjs/swagger'
import { severityStatusEnum } from '../constants/severity-status.enum'

export class ResponseDto<T> {
	@ApiProperty()
	data: T

	@ApiProperty({ default: '', description: 'Mensaje de respuesta' })
	messages: { key: string; value: string }[] = []

	@ApiProperty({ default: 1, description: 'Codigo de severidad' })
	severityCode: severityStatusEnum

	@ApiProperty({ default: true, description: 'Indicador de respuesta' })
	isValid: boolean

	constructor(
		data: T,
		message: string = '',
		severityCode: severityStatusEnum = severityStatusEnum.Success,
		resultValidation: object | null = null,
	) {
		this.data = data
		this.severityCode = severityCode
		if (resultValidation) {
			for (const [key, value] of Object.entries(resultValidation)) {
				this.messages.push({ key: key, value: value as string })
			}
			this.severityCode = severityStatusEnum.Error
		} else {
			if (message != '') this.messages[0] = { key: '', value: message }
		}
		this.isValid = !(this.severityCode === severityStatusEnum.Error)
	}
}
