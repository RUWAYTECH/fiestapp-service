import { Test, TestingModule } from '@nestjs/testing'
import { RequestService } from './request.service'

describe('RequestService', () => {
	let request: RequestService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [RequestService],
		}).compile()

		request = module.get<RequestService>(RequestService)
	})

	it('should be defined', () => {
		expect(request).toBeDefined()
	})
})
