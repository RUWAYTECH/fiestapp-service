import { Injectable, NotFoundException } from '@nestjs/common';
import { UbigeoRepository } from './ubigeo.repository';
import { UbigeoGetAllReqDto } from './dto/ubigeo-req.dto';
import { ResponseBuilder } from '@common/utils/response-builder';
import { Mapper } from '@common/utils/mapper';
import { UbigeoResDto } from './dto/ubigeo-res.dto';

@Injectable()
export class UbigeoService {
	constructor(private readonly ubigeoRepository: UbigeoRepository) {}

	async findAll(query?: UbigeoGetAllReqDto) {
		let filters = {};

		if (query?.pageSize) {
			filters = {
				skip: ((Number(query.page) || 1) - 1) * Number(query.pageSize),
				take: Number(query.pageSize)
			};
		}

		const [data, count] = await this.ubigeoRepository.findAll({
			...filters,
			where: query?.search
				? {
						OR: [
							{ department: { contains: query.search } },
							{ province: { contains: query.search } },
							{ district: { contains: query.search } }
						]
					}
				: undefined,
			orderBy: { createdAt: 'desc' }
		});

		const mappedData = Mapper.mapArray(UbigeoResDto, data);

		return ResponseBuilder.buildPaginated({
			items: mappedData,
			totalRows: count,
			page: query?.page || 1,
			pageSize: query?.pageSize || 0
		});
	}

	async findById(id: string) {
		const item = await this.ubigeoRepository.findById(id);

		if (!item) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Ubigeo not found']));
		}

		return ResponseBuilder.build(Mapper.map(UbigeoResDto, item));
	}

	async findByCode(code: string) {
		const item = await this.ubigeoRepository.findByCode(code);

		if (!item) {
			throw new NotFoundException(ResponseBuilder.error(null, ['Ubigeo not found']));
		}

		return ResponseBuilder.build(Mapper.map(UbigeoResDto, item));
	}
}
