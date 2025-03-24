import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from './auth.guard'
import { Reflector } from '@nestjs/core'

describe('AuthGuard', () => {
	it('should be defined', () => {
		const mockJwtService = {} as JwtService
		const mockReflector = {} as Reflector
		expect(new AuthGuard(mockJwtService, mockReflector)).toBeDefined()
	})
})
