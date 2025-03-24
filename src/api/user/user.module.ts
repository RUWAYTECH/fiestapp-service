import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '@entities/user.entity'
import { UserValidator } from './validator/user-validator'
import { UtilMapper } from '@utils/util-mapper'
import { injectionTokens } from '@repositories/injection-tokens'
import { UserRepository } from '@repositories/user.repository'
import { UserController } from './user.controller'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	controllers: [UserController],
	providers: [
		UserService,
		UserValidator,
		UtilMapper,
		{
			provide: injectionTokens.userRepository,
			useClass: UserRepository,
		},
	],
	exports: [
		UserService,
		injectionTokens.userRepository,
		TypeOrmModule,
		UtilMapper,
	],
})
export class UserModule {}
