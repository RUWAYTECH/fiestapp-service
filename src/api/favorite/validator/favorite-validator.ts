import { Validator } from 'fluentvalidation-ts'
import { Injectable } from '@nestjs/common'
import { CreateFavoriteDto } from '../dto/create-favorite.dto'

@Injectable()
export class FavoriteValidator extends Validator<CreateFavoriteDto> {
	constructor() {
		super()
		this.ruleFor('serviceId').notEmpty().maxLength(100)
        this.ruleFor('userId').notEmpty().maxLength(100)
	}
}
