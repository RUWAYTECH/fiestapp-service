import { PrismaService } from '@db/prisma/prisma.service';
/* import { UserSeeder } from './user.seed';
import { UbigeoSeeder } from './ubigeo.seed';
import { CategorySeeder } from './category.seed'; */
import { ServiceSeeder } from './service.seed';

const prismaService = new PrismaService();

export const seedDatabase = async () => {
	try {
		await prismaService.$connect();

		/* const userSeeder = new UserSeeder(prismaService);
		await userSeeder.clear();
		await userSeeder.run();

		const ubigeoSeeder = new UbigeoSeeder(prismaService);
		await ubigeoSeeder.clear();
		await ubigeoSeeder.run();

		const categorySeeder = new CategorySeeder(prismaService);
		await categorySeeder.clear();
		await categorySeeder.run(); */

		const serviceSeeder = new ServiceSeeder(prismaService);
		await serviceSeeder.clear();
		await serviceSeeder.run();

		console.log('Database seeded successfully.');
	} catch (error) {
		console.error('Error seeding database:', error);
	} finally {
		await prismaService.$disconnect();
	}
};

seedDatabase();
