import { Validator } from "fluentvalidation-ts"
import { CreateImageDto } from "../dto/create-image.dto"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ImageValidator extends Validator<CreateImageDto> {
	constructor() {
		super()
		this.ruleFor('url').notEmpty().maxLength(100)
        this.ruleFor('name').notEmpty().maxLength(100)
	}
}