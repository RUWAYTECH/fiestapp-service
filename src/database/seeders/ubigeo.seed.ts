import { PrismaService } from '@db/prisma/prisma.service';
import { Prisma } from '@g-prisma/index';
import ubigeo from '../data/ubigeo.json';

export class UbigeoSeeder {
	constructor(private readonly prismaService: PrismaService) {}

	async run() {
		const data: Prisma.UbigeoCreateInput[] = ubigeo.data.map(item => ({
			department: item.department,
			province: item.province,
			district: item.district,
			code: item.ubigeo
		}));

		return this.prismaService.ubigeo.createMany({ data });
	}

	async clear() {
		await this.prismaService.ubigeo.deleteMany();
	}
}
