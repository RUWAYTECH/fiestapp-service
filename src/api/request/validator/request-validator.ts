import { Validator } from 'fluentvalidation-ts'
import { CreateRequestDto } from '../dto/create-request.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RequestValidator extends Validator<CreateRequestDto> {
	constructor() {
		super()
		this.ruleFor('message').notEmpty().maxLength(100)
	}
}
