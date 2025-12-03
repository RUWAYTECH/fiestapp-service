import { ResponseDto, PaginatedResponseDto } from '../dtos/response.dto';
import { ResponseMessageDto, ResponseMessageEnum } from '../dtos/response-message.dto';

type PaginatedInput<T> = {
	items: T;
	page: number;
	pageSize: number;
	totalRows: number;
};

export class ResponseBuilder {
	private static isPaginated<T>(data: T | PaginatedInput<T>): data is PaginatedInput<T> {
		return (
			typeof data === 'object' &&
			data !== null &&
			'items' in data &&
			'page' in data &&
			'pageSize' in data &&
			'totalRows' in data
		);
	}

	static create<T>(
		data: T | PaginatedInput<T>,
		messages: (ResponseMessageDto | string)[] = []
	): ResponseDto<T> | PaginatedResponseDto<T> {
		const msgs: ResponseMessageDto[] = messages.map(msg =>
			typeof msg === 'string' ? { message: msg, type: ResponseMessageEnum.ERROR } : msg
		);

		if (this.isPaginated<T>(data)) {
			const totalPages = Math.ceil(data.totalRows / data.pageSize);

			return {
				data: data.items,
				messages: msgs,
				pageOptions: {
					page: data.page,
					pageSize: data.pageSize,
					totalRows: data.totalRows,
					totalPages
				}
			};
		}

		return {
			data,
			messages: msgs
		};
	}

	static build<T>(data: T, messages: (ResponseMessageDto | string)[] = []): ResponseDto<T> {
		const msgs: ResponseMessageDto[] = messages.map(msg =>
			typeof msg === 'string' ? { message: msg, type: ResponseMessageEnum.SUCCESS } : msg
		);

		return {
			data,
			messages: msgs
		};
	}

	static buildPaginated<T>(
		data: PaginatedInput<T>,
		messages: (ResponseMessageDto | string)[] = []
	): PaginatedResponseDto<T> {
		const msgs: ResponseMessageDto[] = messages.map(msg =>
			typeof msg === 'string' ? { message: msg, type: ResponseMessageEnum.SUCCESS } : msg
		);

		return {
			data: data.items,
			messages: msgs,
			pageOptions: {
				page: data.page,
				pageSize: data.pageSize || 1,
				totalRows: data.totalRows,
				totalPages: data.pageSize ? Math.ceil(data.totalRows / data.pageSize) : 1
			}
		};
	}

	static error<T>(data: T = null as T, messages: (ResponseMessageDto | string)[]): ResponseDto<T> {
		const msgs: ResponseMessageDto[] = messages.map(msg =>
			typeof msg === 'string' ? { message: msg, type: ResponseMessageEnum.ERROR } : msg
		);

		return {
			data,
			messages: msgs
		};
	}
}
