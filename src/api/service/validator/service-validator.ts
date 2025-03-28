import { Validator } from 'fluentvalidation-ts'
import { CreateServiceDto } from '../dto/create-service.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ServiceValidator extends Validator<CreateServiceDto> {
	constructor() {
		super()
		this.ruleFor('name').notEmpty().maxLength(100)
		this.ruleFor('description').notEmpty().maxLength(100)
	}
}
