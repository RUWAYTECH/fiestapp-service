import { PrismaClient, Prisma, Role } from '@g-prisma/client';
import * as bcrypt from 'bcrypt';
import { AuthProviderEnum } from '@common/constants/auth-provider';

export class UserSeeder {
	constructor(private readonly prisma: PrismaClient) {}

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

		await this.prisma.user.create({ data: admin });
		await this.prisma.user.create({ data: provider });
	}

	async clear() {
		await this.prisma.requestItem.deleteMany();
		await this.prisma.requestPayment.deleteMany();
		await this.prisma.request.deleteMany();
		await this.prisma.provider.deleteMany();
		await this.prisma.user.deleteMany();
	}
}
