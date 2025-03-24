/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common'
import {
	ClassConstructor,
	ClassTransformOptions,
	plainToInstance,
} from 'class-transformer'

@Injectable()
export class UtilMapper {
	map<T, V>(
		cls: ClassConstructor<T>,
		plain: V,
		options?: ClassTransformOptions,
	): T {
		return plainToInstance(cls, plain, options)
	}

	mapArray<T, V>(
		cls: ClassConstructor<T>,
		plain: V[],
		options?: ClassTransformOptions,
	): T[] {
		return plainToInstance(cls, plain, options)
	}
}
