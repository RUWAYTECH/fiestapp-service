import { PrismaService } from '@db/prisma/prisma.service';
import { Prisma } from '@g-prisma/index';

export class UbigeoSeeder {
	constructor(private readonly prismaService: PrismaService) {}

	async run() {
		const data: Prisma.UbigeoCreateInput[] = [
			{
				code: '030101',
				department: 'APURIMAC',
				province: 'ABANCAY',
				district: 'ABANCAY'
			},
			{
				code: '030102',
				department: 'APURIMAC',
				province: 'ABANCAY',
				district: 'CIRCA'
			},
			{
				code: '030103',
				department: 'APURIMAC',
				province: 'ABANCAY',
				district: 'CURAHUASI'
			},
			{
				code: '030104',
				department: 'APURIMAC',
				province: 'ABANCAY',
				district: 'HUANIPACA'
			}
		];

		return this.prismaService.ubigeo.createMany({ data });
	}

	async clear() {
		return this.prismaService.ubigeo.deleteMany();
	}
}
