import { config } from '@conf/index';
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, ResourceApiResponse } from 'cloudinary';
import { extractPublicId } from 'cloudinary-build-url';

@Injectable()
export class CloudinaryService {
	constructor() {
		cloudinary.config({
			cloud_name: config.cloudinary.cloudName,
			api_key: config.cloudinary.apiKey,
			api_secret: config.cloudinary.apiSecret,
			secure: true
		});
	}

	async uploadImage(filePath: string, folder: string): Promise<{ url: string; publicId: string }> {
		const result = await cloudinary.uploader.upload(filePath, {
			folder
		});
		return { url: result.secure_url, publicId: result.public_id };
	}

	async deleteImage(publicId: string): Promise<void> {
		await cloudinary.uploader.destroy(publicId);
	}

	async deleteImages(publicIds: string[]): Promise<void> {
		if (publicIds.length === 0) return;
		await cloudinary.api.delete_resources(publicIds);
	}

	async getResource(publicId: string): Promise<ResourceApiResponse> {
		try {
			const resource = await cloudinary.api.resource(publicId);
			return resource;
		} catch (error) {
			console.error('Error fetching resource from Cloudinary', { publicId, error: error.message });
			throw new Error('Error fetching resource from Cloudinary');
		}
	}

	extractPublicIdFromUrl(url: string): string | null {
		const publicId = extractPublicId(url);
		return publicId || null;
	}
}
