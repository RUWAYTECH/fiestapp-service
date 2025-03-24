import { Validator } from 'fluentvalidation-ts'
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../dto/create-user.dto'

@Injectable()
export class UserValidator extends Validator<CreateUserDto> {
	constructor() {
		super()
		this.ruleFor('name').notEmpty().maxLength(100)
		this.ruleFor('email').notEmpty().maxLength(100)
		this.ruleFor('password').notNull().maxLength(100)
		this.ruleFor('phone').maxLength(100)
	}
}
