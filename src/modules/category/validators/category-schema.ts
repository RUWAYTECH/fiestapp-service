import z from 'zod';

export const createCategorySchema = z.object({
	name: z.string().trim().nonempty().max(255),
	description: z.string().trim().nonempty().max(700),
	image: z.url()
});

export const updateCategorySchema = z.object({
	name: z.string().trim().nonempty().max(255),
	description: z.string().trim().nonempty().max(700),
	image: z.url()
});
