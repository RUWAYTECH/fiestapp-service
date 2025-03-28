import { Validator } from 'fluentvalidation-ts'
import { CreateServicesDto } from '../dto/create-services.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ServicesValidator extends Validator<CreateServicesDto> {
	constructor() {
		super()
		this.ruleFor('name').notEmpty().maxLength(100)
		this.ruleFor('description').notEmpty().maxLength(100)
	}
}
