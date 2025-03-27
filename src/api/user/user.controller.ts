import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { UserResponseDto } from './dto/user-response.dto'
import { ResponseDto } from '@dto/response.dto'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
@ApiTags('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@HttpCode(200)
	@ApiOperation({ summary: 'Create user' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<UserResponseDto>,
	})
	async create(
		@Body() data: CreateUserDto,
	): Promise<ResponseDto<UserResponseDto | null>> {
		return this.userService.create(data)
	}

	@Get()
	@HttpCode(200)
	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({
		status: 200,
		type: ResponseDto<UserResponseDto[]>,
	})
	async getUsers(): Promise<ResponseDto<UserResponseDto[] | null>> {
		return this.userService.getUsers()
	}
}
