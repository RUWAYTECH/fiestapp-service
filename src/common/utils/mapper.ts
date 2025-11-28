import { ClassConstructor, ClassTransformOptions, plainToInstance, Expose, Type } from 'class-transformer';

const NATIVE_TYPES = ['String', 'Number', 'Boolean', 'Date', 'Object', 'Array'];

export class Mapper {
	static partialMap<T, U>(cls: ClassConstructor<T>, plainObject: U, options?: ClassTransformOptions): T {
		Object.keys(new cls() as object).forEach(key => {
			Reflect.decorate([Expose()], cls.prototype, key);
		});

		return plainToInstance(cls, plainObject, {
			excludeExtraneousValues: true,
			...options
		});
	}

	static partialMapArray<T, U>(cls: ClassConstructor<T>, plainObjects: U[], options?: ClassTransformOptions): T[] {
		return plainObjects.map(plainObject => this.partialMap(cls, plainObject, options));
	}

	static map<T, U>(cls: ClassConstructor<T>, plainObject: U, options?: ClassTransformOptions): T {
		this.applyRecursiveDecorators(cls, plainObject);

		return plainToInstance(cls, plainObject, {
			excludeExtraneousValues: true,
			...options
		});
	}

	private static applyRecursiveDecorators(cls: any, plainObject: any) {
		const instance = new cls();

		Object.keys(instance).forEach(key => {
			const metadata = Reflect.getMetadata('design:type', cls.prototype, key);
			const value = plainObject?.[key];

			// Si ya tiene Expose/Type, evita re-decorar
			const existingExpose = Reflect.getMetadata('class-transformer:expose', cls.prototype, key);
			const existingType = Reflect.getMetadata('class-transformer:type', cls.prototype, key);

			// ===========================
			// 1. ARRAY DE OBJETOS
			// ===========================
			if (metadata?.name === 'Array' && Array.isArray(value) && value.length > 0) {
				const first = value[0];

				if (first && !NATIVE_TYPES.includes(first.constructor.name)) {
					if (!existingType) {
						Reflect.decorate([Type(() => first.constructor)], cls.prototype, key);
					}
				}

				if (!existingExpose) {
					Reflect.decorate([Expose()], cls.prototype, key);
				}

				// Recursivo para arrays de DTO
				value.forEach((item: any) => {
					if (item && typeof item === 'object') {
						this.applyRecursiveDecorators(item.constructor, item);
					}
				});

				return;
			}

			// ===========================
			// 2. PROPIEDAD CON TYPE (DTO)
			// ===========================
			if (metadata && !NATIVE_TYPES.includes(metadata.name)) {
				if (!existingType) {
					Reflect.decorate([Type(() => metadata)], cls.prototype, key);
				}
				if (!existingExpose) {
					Reflect.decorate([Expose()], cls.prototype, key);
				}

				// Recursivo
				if (value) {
					this.applyRecursiveDecorators(metadata, value);
				}

				return;
			}

			// ===========================
			// 3. PLAIN OBJECT con constructor propio
			// ===========================
			if (metadata?.name === 'Object' && value && value.constructor && !NATIVE_TYPES.includes(value.constructor.name)) {
				if (!existingType) {
					Reflect.decorate([Type(() => value.constructor)], cls.prototype, key);
				}
				if (!existingExpose) {
					Reflect.decorate([Expose()], cls.prototype, key);
				}

				this.applyRecursiveDecorators(value.constructor, value);
				return;
			}

			// ===========================
			// 4. NATIVOS → Solo Expose
			// ===========================
			if (!existingExpose) {
				Reflect.decorate([Expose()], cls.prototype, key);
			}
		});
	}

	static mapArray<T, U>(cls: ClassConstructor<T>, plainObjects: U[], options?: ClassTransformOptions): T[] {
		return plainObjects.map(plainObject => this.map(cls, plainObject, options));
	}
}
