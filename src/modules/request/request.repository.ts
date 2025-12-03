import { PrismaService } from '@db/prisma/prisma.service';
import { Prisma, Request, RequestPayment } from '@g-prisma/index';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RequestRepository {
	constructor(private readonly prismaService: PrismaService) {}

	async findById(
		id: string
	): Promise<Prisma.RequestGetPayload<{ include: { provider: true; user: true; payment: true; items: true } }> | null> {
		return this.prismaService.request.findUnique({
			where: { id },
			include: { provider: true, user: true, payment: true, items: true }
		});
	}

	async findAll(params?: {
		skip?: number;
		take?: number;
		cursor?: Prisma.RequestWhereUniqueInput;
		where?: Prisma.RequestWhereInput;
		orderBy?: Prisma.RequestOrderByWithRelationInput;
	}): Promise<
		[Prisma.RequestGetPayload<{ include: { provider: true; user: true; payment: true; items: true } }>[], number]
	> {
		const { skip, take, cursor, where, orderBy } = params || {};
		const [data, count] = await this.prismaService.$transaction([
			this.prismaService.request.findMany({
				skip,
				take,
				cursor,
				where,
				include: { provider: true, user: true, payment: true, items: true },
				orderBy
			}),
			this.prismaService.request.count({ where })
		]);

		return [data, count];
	}

	async create(data: Prisma.RequestCreateInput): Promise<Request> {
		return this.prismaService.request.create({ data });
	}

	async update(id: string, data: Prisma.RequestUpdateInput): Promise<Request> {
		return this.prismaService.request.update({
			where: { id },
			data
		});
	}

	async createPayment(data: Prisma.RequestPaymentCreateInput): Promise<RequestPayment> {
		return this.prismaService.requestPayment.create({ data });
	}
}
