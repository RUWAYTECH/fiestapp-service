import { Validator } from 'fluentvalidation-ts'
import { CreateServicesDto } from '../dto/create-services.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ServicesValidator extends Validator<CreateServicesDto> {
	constructor() {
		super()
		this.ruleFor('serviceId').notEmpty().notNull()
		this.ruleFor('name').notEmpty().maxLength(100)
		this.ruleFor('description').notEmpty().maxLength(100)
		// this.ruleFor('priceMin').notEmpty().maxLength(100)
		// this.ruleFor('priceMax').notEmpty().maxLength(100)
		// this.ruleFor('score').notEmpty().maxLength(100)
		// this.ruleFor('tag').notEmpty().maxLength(100)
	}
}
