import { PrismaService } from '@db/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@g-prisma/client';

@Injectable()
export class UserRepository {
	constructor(private prisma: PrismaService) {}

	async findByEmail(email: string): Promise<User | null> {
		return this.prisma.user.findUnique({
			where: { email }
		});
	}

	async findById(id: string): Promise<Prisma.UserGetPayload<{ include: { provider: true } }> | null> {
		return this.prisma.user.findUnique({
			where: { id },
			include: { provider: true }
		});
	}

	async findAll(params?: {
		skip?: number;
		take?: number;
		cursor?: Prisma.UserWhereUniqueInput;
		where?: Prisma.UserWhereInput;
		orderBy?: Prisma.UserOrderByWithRelationInput;
	}): Promise<[User[], number]> {
		const { skip, take, cursor, where, orderBy } = params || {};

		const [users, count] = await this.prisma.$transaction([
			this.prisma.user.findMany({
				skip,
				take,
				cursor,
				where,
				orderBy
			}),
			this.prisma.user.count({ where })
		]);

		return [users, count];
	}

	async create(data: Prisma.UserCreateInput): Promise<User> {
		return this.prisma.user.create({
			data
		});
	}

	async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
		return this.prisma.user.update({
			where: { id },
			data
		});
	}

	async delete(id: string): Promise<User> {
		return this.prisma.user.delete({
			where: { id }
		});
	}

	async syncProvider(data: Prisma.ProviderUpsertArgs): Promise<any> {
		return this.prisma.provider.upsert(data);
	}
}
