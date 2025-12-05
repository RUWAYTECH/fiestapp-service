import { PrismaClient, Prisma } from '@g-prisma/client';

export class ServiceSeeder {
	constructor(private readonly prisma: PrismaClient) {}

	async getRandomCategoryId(): Promise<string> {
		const count = await this.prisma.category.count();
		if (count === 0) {
			throw new Error('No categories found in the database.');
		}
		const skip = Math.floor(Math.random() * count);
		const categories = await this.prisma.category.findMany({
			select: { id: true },
			take: 1,
			skip
		});
		return categories[0].id;
	}

	async getRandomUbigeoId(): Promise<string> {
		const count = await this.prisma.ubigeo.count();
		if (count === 0) {
			throw new Error('No ubigeos found in the database.');
		}
		const skip = Math.floor(Math.random() * count);
		const ubigeos = await this.prisma.ubigeo.findMany({
			select: { id: true },
			take: 1,
			skip
		});
		return ubigeos[0].id;
	}

	async getRandomProviderId(): Promise<string> {
		const where: Prisma.UserWhereInput = { role: 'USER', provider: { isNot: null } };
		const count = await this.prisma.user.count({ where });
		if (count === 0) {
			throw new Error('No providers found in the database.');
		}
		const skip = Math.floor(Math.random() * count);
		const users = await this.prisma.user.findMany({
			where,
			select: { id: true },
			take: 1,
			skip
		});
		return users[0].id;
	}

	async run() {
		const images: Prisma.ServiceImageCreateManyServiceInput[] = [
			{
				publicId: 'sample_public_id_1',
				url: 'https://res.cloudinary.com/dueqr6cch/image/upload/v1755115604/samples/food/dessert.jpg',
				name: 'Dessert Image'
			},
			{
				publicId: 'sample_public_id_2',
				url: 'https://res.cloudinary.com/dueqr6cch/image/upload/v1755115606/samples/people/jazz.jpg',
				name: 'Pizza Image'
			}
		];

		const data: Prisma.ServiceCreateInput[] = [
			{
				name: 'Catering',
				description: 'Food and beverage services for events',
				priceMin: 500,
				priceMax: 5000,
				status: true,
				category: { connect: { id: await this.getRandomCategoryId() } },
				provider: { connect: { id: await this.getRandomProviderId() } },
				ubigeoServices: {
					create: {
						ubigeo: { connect: { id: await this.getRandomUbigeoId() } }
					}
				},
				images: {
					createMany: {
						data: images
					}
				},
				score: 5
			},
			{
				name: 'Photography',
				description: 'Professional photography services',
				priceMin: 300,
				priceMax: 3000,
				status: true,
				category: { connect: { id: await this.getRandomCategoryId() } },
				provider: { connect: { id: await this.getRandomProviderId() } },
				ubigeoServices: {
					create: {
						ubigeo: { connect: { id: await this.getRandomUbigeoId() } }
					}
				},
				images: {
					createMany: {
						data: images
					}
				},
				score: 4.5
			},
			{
				name: 'Live Music Band',
				description: 'Live music performances for events',
				priceMin: 800,
				priceMax: 8000,
				status: true,
				category: { connect: { id: await this.getRandomCategoryId() } },
				provider: { connect: { id: await this.getRandomProviderId() } },
				ubigeoServices: {
					create: {
						ubigeo: { connect: { id: await this.getRandomUbigeoId() } }
					}
				},
				images: {
					createMany: {
						data: images
					}
				},
				score: 4.5
			},
			{
				name: 'Event Planning',
				description: 'Comprehensive event planning and coordination',
				priceMin: 1000,
				priceMax: 10000,
				status: true,
				category: { connect: { id: await this.getRandomCategoryId() } },
				provider: { connect: { id: await this.getRandomProviderId() } },
				ubigeoServices: {
					create: {
						ubigeo: { connect: { id: await this.getRandomUbigeoId() } }
					}
				},
				images: {
					createMany: {
						data: images
					}
				},
				score: 5
			},
			{
				name: 'Decoration Services',
				description: 'Event decoration and theme setup',
				priceMin: 400,
				priceMax: 4000,
				status: true,
				category: { connect: { id: await this.getRandomCategoryId() } },
				provider: { connect: { id: await this.getRandomProviderId() } },
				ubigeoServices: {
					create: {
						ubigeo: { connect: { id: await this.getRandomUbigeoId() } }
					}
				},
				images: {
					createMany: {
						data: images
					}
				},
				score: 4
			},
			{
				name: 'Audio-Visual Equipment Rental',
				description: 'Rental of audio-visual equipment for events',
				priceMin: 600,
				priceMax: 6000,
				status: true,
				category: { connect: { id: await this.getRandomCategoryId() } },
				provider: { connect: { id: await this.getRandomProviderId() } },
				ubigeoServices: {
					create: {
						ubigeo: { connect: { id: await this.getRandomUbigeoId() } }
					}
				},
				images: {
					createMany: {
						data: images
					}
				},
				score: 4.2
			}
		];

		for (const item of data) {
			await this.prisma.service.create({ data: item });
		}
	}

	async clear() {
		await this.prisma.serviceImage.deleteMany();
		await this.prisma.ubigeoService.deleteMany();
		await this.prisma.favorite.deleteMany();
		await this.prisma.service.deleteMany();
	}
}
