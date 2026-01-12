import { Injectable } from '@nestjs/common';
import { ProviderRepository } from './provider.repository';
import { ProviderGetAllReqDto } from './dto/requests/provider-get-all-req.dto';
import { Mapper } from '@common/utils/mapper';
import { ProviderUserResDto } from './dto/responses/provider-res.dto';
import { ResponseBuilder } from '@common/utils/response-builder';

@Injectable()
export class ProviderService {
	constructor(private readonly providerRepository: ProviderRepository) {}

	async findAll(query?: ProviderGetAllReqDto) {
		let filters: { skip?: number; take?: number } = {};

		if (query?.pageSize) {
			filters = {
				skip: ((Number(query.page) || 1) - 1) * Number(query.pageSize),
				take: Number(query.pageSize)
			};
		}

		const [data, count] = await this.providerRepository.findAll({
			...filters,
			where: {
				OR: query?.search
					? [
							{ name: { contains: query.search, mode: 'insensitive' } },
							{ user: { name: { contains: query.search, mode: 'insensitive' } } }
						]
					: undefined
			}
		});

		const mappedData = Mapper.mapArray(ProviderUserResDto, data);

		return ResponseBuilder.buildPaginated({
			items: mappedData,
			totalRows: count,
			page: Number(query?.page) || 1,
			pageSize: Number(query?.pageSize) || 0
		});
	}
}
