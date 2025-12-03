import { PrismaClient } from '@g-prisma/index';
import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	constructor() {
		/* super({ log: ['query', 'info', 'warn', 'error'] }); */
		super();
	}

	async onModuleInit() {
		await this.$connect();
	}

	enableShutdownHooks(app: INestApplication) {
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		this.$on('beforeExit' as never, async () => {
			await app.close();
		});
	}

	async onModuleDestroy() {
		await this.$disconnect();
	}
}
