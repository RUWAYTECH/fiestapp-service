import { ResponseMessageDto, ResponseMessageEnum } from '@common/dtos/response-message.dto';
import { ResponseBuilder } from '@common/utils/response-builder';
import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
	constructor(private readonly schema: ZodSchema) {}

	transform<T>(value: T) {
		const result = this.schema.safeParse(value);

		if (!result.success) {
			/* const flatErrors = z.flattenError(result.error)

			const errors: ResponseMessageDto[] = Object.entries(flatErrors).map(([field, messages]) => ({
				message: field
			})) */

			const errors: ResponseMessageDto[] = result.error.issues.map(issue => ({
				message: `${issue.path.join('.')} - ${issue.message}`,
				type: ResponseMessageEnum.ERROR
			}));

			throw new BadRequestException(ResponseBuilder.error(null, errors));
		}

		return result.data;
	}
}
