/**
 * favorite service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::favorite.favorite', ({ strapi }) => ({
    async findFavorites(params) {
        try {
            const { page, limit } = params;
            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;

            const pageNumber = parseInt(page);
            const pageSize = parseInt(limit);

            if (!authenticatedUser) {
                throw new Error('User not authenticated');
            }

            const pageLimit = {
                start: (pageNumber - 1) * pageSize,
                limit,
            }
            
            const favorites = await strapi.entityService.findMany('api::favorite.favorite', {
                filters: {
                    userId: authenticatedUser,
                },
                populate: ['service'],
                ...pageLimit,
            });

            const count = await strapi.db.query('api::favorite.favorite').count({
                where: {
                    userId: authenticatedUser,
                }
            });
            
            if (!favorites || favorites.length === 0) {
                return {
                    data: [],
                    message: 'Listado con exito',
                    meta: {
                        pagination: {
                            page,
                            pageSize: limit,
                            total: 0,
                        },
                    },
                };
            }
            
            const serviceIds = favorites
                .filter((favorite: any) => favorite.service && favorite.service.id)
                .map((favorite: any) => favorite.service.id);
            
            if (serviceIds.length === 0) {
                return {
                    data: [],
                    message: 'Listado con exito',
                    meta: {
                        pagination: {
                            page,
                            pageSize: limit,
                            total: 0,
                        },
                    },
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
                meta: {
                    pagination: {
                        page: parseInt(page),
                        pageSize: parseInt(limit),
                        total: count,
                    },
                },
            };
        } catch (error) {
            throw error;
        }
    },

    async customDelete(id) {
        try {
            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;

            const favorite = await strapi.entityService.findOne('api::favorite.favorite', id, {
                filters: {
                    userId: authenticatedUser,
                },
                populate: ['service'],
            });

            if (!favorite) {
                throw new Error('Favorite not found');
            }

            await strapi.entityService.delete('api::favorite.favorite', id);

            return {
                data: favorite,
                message: 'Favorite deleted successfully',
            };
        } catch (error) {
            throw error;
        }
    },
}));