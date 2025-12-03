import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RequestMethod } from '@nestjs/common';
import z from 'zod';
import es from 'zod/v4/locales/es.cjs';
import { config } from '@conf/index';

async function bootstrap() {
	// zod internationalization
	z.config(es());

	const app = await NestFactory.create(AppModule, {
		logger: ['log', 'error', 'warn', 'debug', 'verbose']
	});

	// global prefix
	app.setGlobalPrefix('api', { exclude: ['/docs', { path: '', method: RequestMethod.GET }] });

	// enable CORS
	app.enableCors({
		origin: (origin, callback) => {
			if (config.allowedOrigins.includes(origin) || origin === `http://localhost:${config.port}` || !origin) {
				callback(null, origin);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		credentials: true,
		methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		headers: ['Content-Type', 'Authorization']
	});

	// interceptors
	//app.useGlobalInterceptors(new TransformInterceptor())

	// start swagger
	const swgConf = new DocumentBuilder()
		.setTitle('FiestApp API')
		.setDescription('API documentation for the FiestApp application')
		.setContact('Your Name', 'https://yourwebsite.com', 'your.email@example.com')
		.setVersion('1.0')
		.addBearerAuth(
			{
				type: 'http',
				scheme: 'Bearer',
				bearerFormat: 'JWT',
				in: 'header'
			},
			'Authorization' // This is the name of the security scheme
		)
		.addSecurityRequirements('Authorization')
		.build();

	const documentFactory = () => SwaggerModule.createDocument(app, swgConf);
	SwaggerModule.setup('docs', app, documentFactory());

	// start app
	await app.listen(config.port);

	console.log(`🚀 Application is running on: http://localhost:${config.port}`);
}

bootstrap();
