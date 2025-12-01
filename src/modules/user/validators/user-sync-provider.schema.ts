import z from 'zod';

export const userSyncProviderSchema = z.object({
	name: z.string().trim().nonempty().max(255),
	description: z.string().trim().nonempty().max(700),
	picture: z.url().nullable().optional(),
	email: z.email(),
	address: z.string().trim().nonempty().max(300),
	phone: z.string().trim().nonempty().max(20),
	website: z.url().nullable().optional(),
	facebook: z.url().nullable().optional(),
	instagram: z.url().nullable().optional()
});
