import z from 'zod';

export const createServiceSchema = z.object({
	name: z.string().trim().nonempty().max(255),
	description: z.string().trim().nonempty().max(700),
	priceMin: z.number().nonnegative(),
	priceMax: z.number().nonnegative(),
	duration: z.number().nonnegative().int().nullable().optional(),
	status: z.boolean().optional(),
	providerId: z.cuid(),
	categoryId: z.cuid(),
	ubigeoIds: z.array(z.cuid()).min(1),
	imageUrls: z.array(z.url()).min(1)
});

export const updateServiceSchema = createServiceSchema;

export const userCreateServiceSchema = createServiceSchema.omit({ providerId: true });
export const userUpdateServiceSchema = updateServiceSchema.omit({ providerId: true });
