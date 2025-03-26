import { Validator } from 'fluentvalidation-ts'
import { Injectable } from '@nestjs/common'
import { SignUpRequestDto } from '../dto/sign-up-request.dto'

@Injectable()
export class AuthValidator extends Validator<SignUpRequestDto> {
	constructor() {
		super()
		this.ruleFor('name').notEmpty().maxLength(100)
		this.ruleFor('email').notEmpty().maxLength(100)
		this.ruleFor('password').notEmpty().maxLength(100)
		this.ruleFor('password').matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
		)
	}
}
