import { PrismaClient, Prisma } from '@g-prisma/client';

export class CategorySeeder {
	constructor(private readonly prisma: PrismaClient) {}

	async run() {
		const data: Prisma.CategoryCreateInput[] = [
			{
				name: 'Music',
				description: 'All music related events',
				image: 'https://res.cloudinary.com/dueqr6cch/image/upload/v1755115604/samples/food/dessert.jpg'
			},
			{
				name: 'Sports',
				description: 'All sports related events',
				image: 'https://res.cloudinary.com/dueqr6cch/image/upload/v1755115605/samples/food/fish-vegetables.jpg'
			},
			{
				name: 'Art',
				description: 'All art related events',
				image: 'https://res.cloudinary.com/dueqr6cch/image/upload/v1755115606/samples/people/jazz.jpg'
			}
		];

		return this.prisma.category.createMany({ data });
	}

	async clear() {
		return this.prisma.category.deleteMany();
	}
}
