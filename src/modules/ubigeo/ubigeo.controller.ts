import { Controller, Get, Query } from '@nestjs/common';
import { UbigeoService } from './ubigeo.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '@common/decorators/public.decorator';
import { PaginatedResponseDoc, ResponseDoc } from '@common/decorators/response-doc.decorator';
import { UbigeoResDto } from './dto/ubigeo-res.dto';
import { UbigeoGetAllReqDto } from './dto/ubigeo-req.dto';

@Controller('ubigeos')
@ApiTags('Ubigeo')
@Public()
export class UbigeoController {
	constructor(private readonly ubigeoService: UbigeoService) {}

	@Get()
	@PaginatedResponseDoc(UbigeoResDto)
	async findAll(@Query() query: UbigeoGetAllReqDto) {
		return this.ubigeoService.findAll(query);
	}

	@Get(':id')
	@ResponseDoc(UbigeoResDto)
	async findById(@Query('id') id: string) {
		return this.ubigeoService.findById(id);
	}

	@Get('code/:code')
	@ResponseDoc(UbigeoResDto)
	async findByCode(@Query('code') code: string) {
		return this.ubigeoService.findByCode(code);
	}
}
