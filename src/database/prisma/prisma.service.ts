import { config } from '@conf/index';
import { PrismaClient } from '@g-prisma/client';
import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	private pool: Pool;

	constructor() {
		const pool = new Pool({
			connectionString: config.db.url,
			ssl: config.db.ssl ? { rejectUnauthorized: false } : false
		});

		const adapter = new PrismaPg(pool);

		super({ adapter });
		this.pool = pool;
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
		await this.pool.end();
	}
}
