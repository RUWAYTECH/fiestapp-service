import { PrismaService } from '@db/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Ubigeo, Prisma } from '@g-prisma/client';

@Injectable()
export class UbigeoRepository {
	constructor(private prisma: PrismaService) {}

	async findById(id: string): Promise<Ubigeo | null> {
		return await this.prisma.ubigeo.findUnique({
			where: { id }
		});
	}

	findByCode(code: string): Promise<Ubigeo | null> {
		return this.prisma.ubigeo.findUnique({
			where: { code }
		});
	}

	async findAll(params?: {
		skip?: number;
		take?: number;
		cursor?: Prisma.UbigeoWhereUniqueInput;
		where?: Prisma.UbigeoWhereInput;
		include?: Prisma.UbigeoInclude | null | undefined;
		orderBy?: Prisma.UbigeoOrderByWithRelationInput;
	}): Promise<[Ubigeo[], number]> {
		const { skip, take, cursor, where, orderBy, include } = params || {};

		const [data, count] = await this.prisma.$transaction([
			this.prisma.ubigeo.findMany({
				skip,
				take,
				cursor,
				where,
				include,
				orderBy
			}),
			this.prisma.ubigeo.count({ where })
		]);

		return [data, count];
	}
}
