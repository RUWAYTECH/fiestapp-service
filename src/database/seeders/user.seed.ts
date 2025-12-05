import { PrismaService } from '@db/prisma/prisma.service';
import { Prisma, Role } from '@g-prisma/client';
import * as bcrypt from 'bcrypt';
import { AuthProviderEnum } from '@common/constants/auth-provider';

export class UserSeeder {
	constructor(private readonly prismaService: PrismaService) {}

	async run() {
		const admin: Prisma.UserCreateInput = {
			email: 'admin@gmail.com',
			name: 'Admin Doe',
			password: await bcrypt.hash('admin123', 10),
			role: Role.ADMIN,
			authProvider: AuthProviderEnum.LOCAL,
			phone: '',
			picture: ''
		};

		const provider: Prisma.UserCreateInput = {
			email: 'provider@gmail.com',
			name: 'Provider Doe',
			password: await bcrypt.hash('provider123', 10),
			role: Role.USER,
			authProvider: AuthProviderEnum.LOCAL,
			phone: '',
			picture: '',
			provider: {
				create: {
					name: 'Provider Company',
					description: 'We provide the best services for your events',
					email: 'contact@providercompany.com',
					website: 'https://providercompany.com',
					phone: '123-456-7890',
					address: '123 Provider St, City, Country',
					facebook: 'https://facebook.com/providercompany',
					instagram: 'https://instagram.com/providercompany',
					picture:
						'https://res.cloudinary.com/dueqr6cch/image/upload/v1755115606/samples/landscapes/architecture-signs.jpg'
				}
			}
		};

		await this.prismaService.user.create({ data: admin });
		await this.prismaService.user.create({ data: provider });
	}

	async clear() {
		await this.prismaService.requestItem.deleteMany();
		await this.prismaService.requestPayment.deleteMany();
		await this.prismaService.request.deleteMany();
		await this.prismaService.provider.deleteMany();
		await this.prismaService.user.deleteMany();
	}
}
