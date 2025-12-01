import { BadRequestException, Injectable } from '@nestjs/common';
import { UserSyncProviderReqDto } from './dto/requests/user-sync-provider-req.dto,';
import { UserRepository } from './user.repository';
import { ResponseBuilder } from '@common/utils/response-builder';
import { Mapper } from '@common/utils/mapper';
import { UserProfileResDto } from './dto/responses/user-res.dto';

@Injectable()
export class UserService {
	constructor(private userRepository: UserRepository) {}

	async profile(userId: string) {
		const data = await this.userRepository.findById(userId);

		if (!data) {
			throw new BadRequestException(ResponseBuilder.error(null, ['User not found']));
		}

		const mappedData = Mapper.map(UserProfileResDto, data);

		return ResponseBuilder.build(mappedData);
	}

	async syncProvider(userId: string, data: UserSyncProviderReqDto) {
		const user = await this.userRepository.findById(userId);

		if (!user) {
			throw new BadRequestException(ResponseBuilder.error(null, ['User not found']));
		}

		await this.userRepository.syncProvider({
			where: { id: userId },
			update: {
				name: data.name,
				description: data.description,
				picture: data.picture,
				address: data.address,
				email: data.email,
				phone: data.phone,
				website: data.website,
				facebook: data.facebook,
				instagram: data.instagram
			},
			create: {
				id: userId,
				name: data.name,
				description: data.description,
				picture: data.picture,
				address: data.address,
				email: data.email,
				phone: data.phone,
				website: data.website,
				facebook: data.facebook,
				instagram: data.instagram
			}
		});

		return ResponseBuilder.build(null, ['Provider information synced successfully']);
	}
}
