import { PrismaService } from '@db/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Service, Provider, Prisma, ServiceImage } from '@g-prisma/client';

type ServiceResult = Service & { provider: Provider; images: ServiceImage[] };

@Injectable()
export class ServiceRepository {
	constructor(private prisma: PrismaService) {}

	async findById(id: string): Promise<Prisma.ServiceGetPayload<{
		include: { provider: true; images: true; ubigeoServices: { include: { ubigeo: true } } };
	}> | null> {
		return await this.prisma.service.findUnique({
			where: { id },
			include: { provider: true, images: true, ubigeoServices: { include: { ubigeo: true } } }
		});
	}

	async findByIds(ids: string[]): Promise<Prisma.ServiceGetPayload<{ include: { images: true } }>[]> {
		return await this.prisma.service.findMany({
			where: { id: { in: ids } },
			include: { images: true }
		});
	}

	async findAll(params?: {
		skip?: number;
		take?: number;
		cursor?: Prisma.ServiceWhereUniqueInput;
		where?: Prisma.ServiceWhereInput;
		orderBy?: Prisma.ServiceOrderByWithRelationInput;
	}): Promise<[ServiceResult[], number]> {
		const { skip, take, cursor, where, orderBy } = params || {};

		const [data, count] = await Promise.all([
			this.prisma.service.findMany({
				skip,
				take,
				cursor,
				where,
				include: { provider: true, images: true },
				orderBy
			}),
			this.prisma.service.count({ where })
		]);

		return [data, count];
	}

	async create(data: Prisma.ServiceCreateInput): Promise<Service> {
		return await this.prisma.service.create({
			data
		});
	}

	async update(id: string, data: Prisma.ServiceUpdateInput): Promise<Service> {
		return await this.prisma.service.update({
			where: { id },
			data
		});
	}

	async delete(id: string): Promise<Service> {
		return await this.prisma.service.delete({
			where: { id }
		});
	}
}
