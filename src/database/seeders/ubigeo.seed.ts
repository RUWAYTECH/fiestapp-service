import { PrismaClient, Prisma } from '@g-prisma/client';
import ubigeo from '../data/ubigeo.json';

export class UbigeoSeeder {
	constructor(private readonly prisma: PrismaClient) {}

	async run() {
		const data: Prisma.UbigeoCreateInput[] = ubigeo.data.map(item => ({
			department: item.department,
			province: item.province,
			district: item.district,
			code: item.ubigeo.toString().padStart(6, '0')
		}));

		return this.prisma.ubigeo.createMany({ data });
	}

	async clear() {
		await this.prisma.ubigeo.deleteMany();
	}
}
