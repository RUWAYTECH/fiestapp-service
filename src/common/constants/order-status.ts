import { RequestStatus } from '@g-prisma/enums';
import { RequestStatusEnum } from '@modules/request/constants/request-status';

export const getStatusLabel = (status: RequestStatusEnum | RequestStatus): { label: string; color: string } => {
	switch (status) {
		case RequestStatusEnum.REQUESTED:
			return { label: 'Solicitado', color: 'oklch(47.6% 0.114 61.907)' };
		case RequestStatusEnum.IN_PROGRESS:
			return { label: 'En Progreso', color: 'oklch(42.4% 0.199 265.638)' };
		case RequestStatusEnum.COMPLETED:
			return { label: 'Completado', color: 'oklch(44.8% 0.119 151.328)' };
		case RequestStatusEnum.CANCELLED:
			return { label: 'Cancelado', color: 'oklch(44.4% 0.177 26.899)' };
		default:
			return { label: 'Desconocido', color: 'gray' };
	}
};
