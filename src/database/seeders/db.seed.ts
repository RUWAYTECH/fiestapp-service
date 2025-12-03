import { PrismaService } from '@db/prisma/prisma.service';
import { UserSeeder } from './user.seed';
import { UbigeoSeeder } from './ubigeo.seed';
import { CategorySeeder } from './category.seed';
import { ServiceSeeder } from './service.seed';

const prismaService = new PrismaService();

export const seedDatabase = async () => {
	try {
		await prismaService.$connect();

		const userSeeder = new UserSeeder(prismaService);
		const ubigeoSeeder = new UbigeoSeeder(prismaService);
		const categorySeeder = new CategorySeeder(prismaService);
		const serviceSeeder = new ServiceSeeder(prismaService);

		await serviceSeeder.clear();
		await categorySeeder.clear();
		await ubigeoSeeder.clear();
		await userSeeder.clear();

		await userSeeder.run();
		await ubigeoSeeder.run();
		await categorySeeder.run();
		await serviceSeeder.run();

		console.log('Database seeded successfully.');
	} catch (error) {
		console.error('Error seeding database:', error);
	} finally {
		await prismaService.$disconnect();
	}
};

seedDatabase();
