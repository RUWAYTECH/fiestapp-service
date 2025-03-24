import { Validator } from 'fluentvalidation-ts'
import { Injectable } from '@nestjs/common'
import { CreateProviderDto } from '../dto/create-provider.dto'

@Injectable()
export class ProviderValidator extends Validator<CreateProviderDto> {
	constructor() {
		super()
		this.ruleFor('description').notEmpty().maxLength(100)
	}
}
