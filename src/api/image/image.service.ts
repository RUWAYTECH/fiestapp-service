import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { ImageValidator } from './validator/image-validator'
import { UtilMapper } from '@utils/util-mapper'
import { injectionTokens } from '@repositories/injection-tokens'
import { ImageRepository } from '@repositories/image.repository'
import { CreateImageDto } from './dto/create-image.dto'
import { ResponseDto } from '@dto/response.dto'
import { ImageResponseDto } from './dto/image-response.dto'
import { ImageEntity } from '@entities/image.entity'
import { UpdateImageDto } from './dto/update-image.dto'
import { BaseService } from '@api/base/base.service'

@Injectable()
export class ImageService extends BaseService {
	constructor(
		private readonly validator: ImageValidator,
		private readonly utilMapper: UtilMapper,
		@Inject(injectionTokens.imageRepository)
		private readonly imageRepository: ImageRepository,
	) {
		super()
	}

	async create(
		data: CreateImageDto,
	): Promise<ResponseDto<ImageResponseDto | null>> {
		const validResult = this.validator.validate(data)

		if (Object.keys(validResult).length !== 0) {
			return this.toResponse(null, validResult)
		}

		const entity = this.utilMapper.map(ImageEntity, data)

		const result = await this.imageRepository.create(entity)

		const entityResponse = this.utilMapper.map(ImageResponseDto, result)

		return this.toResponse(entityResponse)
	}

	async findAll(): Promise<ResponseDto<ImageResponseDto[] | null>> {
		const images = await this.imageRepository.findAll()
		const entites = this.utilMapper.mapArray(ImageResponseDto, images)

		return this.toResponse(entites)
	}

	async remove(id: number): Promise<void> {
		const image = await this.imageRepository.findById(id)

		if (!image) {
			throw new NotFoundException('Image not found')
		}

		await this.imageRepository.remove(image)
	}

	async findById(
		imageId: number,
	): Promise<ResponseDto<ImageResponseDto | null>> {
		const image = await this.imageRepository.findById(imageId)

		if (!image) {
			throw new NotFoundException(`Image with ID ${imageId} not found`)
		}
		const response = this.utilMapper.map(ImageResponseDto, image)

		return this.toResponse(response)
	}

	async update(id: number, updateImageDto: UpdateImageDto): Promise<number> {
		const image = await this.imageRepository.findById(id)

		if (!image) {
			throw new NotFoundException(`Image with ID ${id} not found`)
		}

		Object.assign(image, updateImageDto)

		const result = await this.imageRepository.update(id, image)

		if (result === 0) {
			throw new Error('Failed to update image')
		}

		return result
	}
}
