import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import configuration from 'src/config/configuration'

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: () => {
				const config = configuration()

				return {
					type: 'postgres',
					host: config.database.host,
					port: config.database.port,
					username: config.database.userName,
					password: config.database.password,
					database: config.database.name,
					entities: [__dirname + '/../**/*.entity{.ts,.js}'],
					ssl: {
						rejectUnauthorized: false,
					},
					synchronize: true,
					logging: true,
					autoLoadEntities: true,
				}
			},
		}),
	],
	exports: [TypeOrmModule],
})
export class InfraestructureModule {}
