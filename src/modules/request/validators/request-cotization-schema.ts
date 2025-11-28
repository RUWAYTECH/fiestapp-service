import z from 'zod';

export const createRequestCotizationSchema = z.object({
	guestQty: z.number().min(1),
	budgetAmount: z.number().min(0),
	eventDate: z.string().refine(date => !isNaN(Date.parse(date)), {
		message: 'Formato de fecha inválido'
	}),
	comment: z.string().max(500).optional(),
	items: z
		.array(
			z.object({
				id: z.cuid(),
				quantity: z.number().min(1)
			})
		)
		.min(1)
});
