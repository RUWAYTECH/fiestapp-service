/**
 * favorite service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::favorite.favorite', ({ strapi }) => ({
    async findFavorites() {
        try {
            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;

            if (!authenticatedUser) {
                throw new Error('User not authenticated');
            }
            
            const favorites = await strapi.entityService.findMany('api::favorite.favorite', {
                filters: {
                    userId: authenticatedUser,
                },
                populate: ['service'],
            });
            
            if (!favorites || favorites.length === 0) {
                return {
                    data: [],
                    message: 'Listado con exito',
                };
            }
            
            const serviceIds = favorites
                .filter((favorite: any) => favorite.service && favorite.service.id)
                .map((favorite: any) => favorite.service.id);
            
            if (serviceIds.length === 0) {
                return {
                    data: [],
                    message: 'Listado con exito',
                };
            }
            
            const services = await strapi.entityService.findMany('api::service.service', {
                filters: {
                    id: {
                        $in: serviceIds,
                    },
                },
                populate: ['provider', 'fileImage', 'category'],
            });
            
            return {
                data: services || [],
                message: 'Listado con exito',
            };
        } catch (error) {
            throw error;
        }
    },
}));