import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import configuration from './config/configuration'
import { AuthGuard } from '@api/auth/auth.guard'
import { JwtService } from '@nestjs/jwt'

const appConf = configuration()

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const jwtService = app.get(JwtService)
	const reflector = app.get(Reflector)
	app.useGlobalGuards(new AuthGuard(jwtService, reflector))

	const config = new DocumentBuilder()
		.setTitle('Products - Swagger')
		.setDescription('The Products endpoints API description')
		.setVersion('1.0')
		.addBearerAuth(
			{
				type: 'http',
				scheme: 'Bearer',
				bearerFormat: 'JWT',
				in: 'header',
			},
			'token',
		)
		.addSecurityRequirements('token')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('swagger', app, document)
	app.enableCors()

	const port = appConf.port

	await app.listen(port)

	console.log(`Application is running on: http://localhost:${port}`)
}

bootstrap()
