/**
 * service service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::service.service', ({ strapi }) => ({
    async getServices(params) {
        try {
            const { page, limit } = params;

            const pageNumber = parseInt(page);
            const pageSize = parseInt(limit);

            const pageLimit = {
                start: (pageNumber - 1) * pageSize,
                limit,
            }

            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;

            const provider = await strapi.entityService.findMany('api::provider.provider', {
                filters: {
                    user: {
                        id: authenticatedUser,
                    },
                },
                fields: ['id'],
            });

            if (!provider || provider.length === 0) {
                return {
                    data: [],
                    message: 'Listado con exito',
                    meta: {
                        pagination: {
                            page: parseInt(page),
                            pageSize: parseInt(limit),
                            total: 0,
                        },
                    },
                }
            }


            const count = await strapi.db.query('api::service.service').count({
                where: {
                    provider: {
                        id: provider[0].id,
                    },
                }
            });

            const services = await strapi.entityService.findMany('api::service.service', {
                filters: {
                    provider: {
                        id: provider[0].id,
                    },
                },
                populate: ['provider', 'provider.user'],
                ...pageLimit,
            });
            return {
                data: services.map((service: any) => {
                    const serviceDetails = service.serviceDetail;

                    return {
                        ...service,
                        serviceDetail: serviceDetails,
                    };
                }),
                message: 'Listado con exito',
                meta: {
                    pagination: {
                        page: parseInt(page),
                        pageSize: parseInt(limit),
                        total: count,
                    },
                },
            }
        } catch (error) {
            throw error;
        }
    },

    async customCreate(params) {
        try {
            const { data } = params;

            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;
            const existingProvider = await strapi.entityService.findMany('api::provider.provider', {
                filters: {
                    user: {
                        id: authenticatedUser,
                    },
                },
            })
            data.provider = existingProvider[0].id;
            return await super.create({
                data: {
                    ...data,
                },
                populate: ['provider', 'provider.user'],
            });
        } catch (error) {
            throw error;
        }
    },
}));
