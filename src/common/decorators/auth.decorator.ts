import { createParamDecorator } from '@nestjs/common';

export const AuthUser = createParamDecorator((key, req) => {
	const request = req.switchToHttp().getRequest();
	const user = request.user;

	return key ? user?.[key] : user;
});
