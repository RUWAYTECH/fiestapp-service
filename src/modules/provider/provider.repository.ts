import { PrismaService } from '@db/prisma/prisma.service';
import { Prisma } from '@g-prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findAll(params?: {
		skip?: number;
		take?: number;
		cursor?: Prisma.ProviderWhereUniqueInput;
		where?: Prisma.ProviderWhereInput;
		orderBy?: Prisma.ProviderOrderByWithRelationInput;
	}): Promise<[Prisma.ProviderGetPayload<{ include: { user: true } }>[], number]> {
		const { skip, take, cursor, where, orderBy } = params || {};

		const [data, count] = await Promise.all([
			this.prisma.provider.findMany({
				skip,
				take,
				cursor,
				where,
				orderBy,
				include: { user: true }
			}),
			this.prisma.provider.count({ where })
		]);

		return [data, count];
	}
}
