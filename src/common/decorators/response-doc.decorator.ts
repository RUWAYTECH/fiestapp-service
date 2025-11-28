import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginatedResponseDto, ResponseDto } from '../dtos/response.dto';

export const PaginatedResponseDoc = <TModel extends Type<any>>(model: TModel) => {
	return applyDecorators(
		ApiExtraModels(PaginatedResponseDto, model),
		ApiResponse({
			schema: {
				allOf: [
					{ $ref: getSchemaPath(PaginatedResponseDto) },
					{
						properties: {
							data: {
								type: 'array',
								items: { $ref: getSchemaPath(model) }
							}
						}
					}
				]
			}
		})
	);
};

export const ResponseDoc = <TModel extends Type<any>>(model?: TModel | null, isArray = false) => {
	if (!model) {
		return applyDecorators(
			ApiExtraModels(ResponseDto),
			ApiResponse({
				schema: {
					allOf: [{ $ref: getSchemaPath(ResponseDto) }],
					properties: {
						data: {
							type: 'object',
							nullable: true,
							example: null
						}
					}
				}
			})
		);
	}

	if (isArray) {
		return applyDecorators(
			ApiExtraModels(ResponseDto, model),
			ApiResponse({
				schema: {
					allOf: [
						{ $ref: getSchemaPath(ResponseDto) },
						{
							properties: {
								data: {
									type: 'array',
									items: { $ref: getSchemaPath(model) }
								}
							}
						}
					]
				}
			})
		);
	}

	return applyDecorators(
		ApiExtraModels(ResponseDto, model),
		ApiResponse({
			schema: {
				allOf: [
					{ $ref: getSchemaPath(ResponseDto) },
					{
						properties: {
							data: { $ref: getSchemaPath(model) }
						}
					}
				]
			}
		})
	);
};
