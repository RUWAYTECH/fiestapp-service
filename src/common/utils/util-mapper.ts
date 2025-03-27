import { Injectable } from '@nestjs/common'
import {
	ClassConstructor,
	ClassTransformOptions,
	Expose,
	plainToInstance,
} from 'class-transformer'

@Injectable()
export class UtilMapper {
	map<T, V>(
		cls: ClassConstructor<T>,
		plain: V,
		options?: ClassTransformOptions,
	): T {
		const instance = new cls()

		Object.keys(instance as object).forEach((key) => {
			Reflect.decorate([Expose()], cls.prototype, key)
		})

		return plainToInstance(cls, plain, {
			excludeExtraneousValues: true,
			...options,
		})
	}

	mapArray<T, V>(
		cls: ClassConstructor<T>,
		plain: V[],
		options?: ClassTransformOptions,
	): T[] {
		plain.forEach((item) => {
			Object.keys(item as object).forEach((key) => {
				Reflect.decorate([Expose()], cls.prototype, key)
			})
		})

		return plainToInstance(cls, plain, {
			excludeExtraneousValues: false,
			...options,
		})
	}
}
