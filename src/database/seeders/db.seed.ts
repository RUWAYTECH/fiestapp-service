import 'dotenv/config';
import { PrismaClient } from '@g-prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { UserSeeder } from './user.seed';
import { UbigeoSeeder } from './ubigeo.seed';
import { CategorySeeder } from './category.seed';
import { ServiceSeeder } from './service.seed';

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
	const userSeeder = new UserSeeder(prisma);
	const ubigeoSeeder = new UbigeoSeeder(prisma);
	const categorySeeder = new CategorySeeder(prisma);
	const serviceSeeder = new ServiceSeeder(prisma);

	await serviceSeeder.clear();
	await categorySeeder.clear();
	await ubigeoSeeder.clear();
	await userSeeder.clear();

	await userSeeder.run();
	await ubigeoSeeder.run();
	await categorySeeder.run();
	await serviceSeeder.run();

	console.log('Database seeded successfully.');
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
