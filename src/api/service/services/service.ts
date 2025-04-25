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
            const { ubigeos } = data;

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
            const serviceCreate = await super.create({
                data: {
                    ...data,
                },
                populate: ['provider', 'provider.user'],
            });

            const createUbigeoServices = await Promise.all(
                ubigeos.map((ubigeoId) =>
                    strapi.entityService.create('api::ubigeo-service.ubigeo-service', {
                        data: {
                            ubigeo: ubigeoId,
                            service: serviceCreate.id,
                        },
                        populate: ['ubigeo'],
                    })
                )
            );

            return {
                ...serviceCreate,
                ubigeoServices: createUbigeoServices,
            };
        } catch (error) {
            throw error;
        }
    },

    async serviceById(params) {
        try {
            const { id } = params;
            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;

            const service = await strapi.entityService.findOne('api::service.service', id, {
                filters: {
                    provider: {
                        user: {
                            id: authenticatedUser,
                        },
                    },
                    id,
                },
                populate: ['provider', 'provider.user', 'fileImage'],
            });

            const ubigeoServices = await strapi.entityService.findMany('api::ubigeo-service.ubigeo-service', {
                filters: {
                    service: id,
                },
                populate: ['ubigeo'],
            });

            return {
                ...service,
                ubigeoServices,
            };
        } catch (error) {
            throw error;
        }
    },

    async customUpdate(id, params) {
        try {
            const { data } = params;
            const { ubigeos } = data;

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
            const serviceUpdate = await strapi.entityService.update('api::service.service', id, {
                data: {
                    ...data,
                },
                populate: ['provider', 'provider.user'],
            });

            await strapi.db.query('api::ubigeo-service.ubigeo-service').deleteMany({
                where: {
                    service: id,
                },
            });

            const newUbigeoServices = await Promise.all(
                ubigeos.map((ubigeoId) =>
                    strapi.entityService.create('api::ubigeo-service.ubigeo-service', {
                        data: {
                            ubigeo: ubigeoId,
                            service: serviceUpdate.id,
                        },
                        populate: ['ubigeo'],
                    })
                )
            );

            return {
                ...serviceUpdate,
                ubigeoServices: newUbigeoServices,
            };
        } catch (error) {
            throw error;
        }
    },
    async getServicesByFilters(params) {
        try {
            const { page, limit, filters = {} } = params;
            console.log(filters);
            const pageNumber = parseInt(page);
            const pageSize = parseInt(limit);

            const pageLimit = {
                start: (pageNumber - 1) * pageSize,
                limit: pageSize,
            };

            const hasUbigeoServiceFilter =
                filters?.ubigeoService?.ubigeo?.id?.$eq !== undefined;

            if (hasUbigeoServiceFilter) {
                const { ubigeo } = filters.ubigeoService;
                const ubigeoId = ubigeo.id.$eq;

                const ubigeoService = await strapi.entityService.findMany(
                    'api::ubigeo-service.ubigeo-service',
                    {
                        filters: {
                            ubigeo: {
                                id: ubigeoId,
                            },
                        },
                        populate: ['service'],
                    }
                ) as any;
                let filtersService = {};
                if (ubigeoService.length > 0) {
                    const serviceIds = ubigeoService.map(
                        (item) => item?.service?.id
                    ).filter(Boolean);
                    filtersService = {
                        id: {
                            $in: serviceIds,
                        },
                    };
                }

                const getServices = await strapi.entityService.findMany(
                    'api::service.service',
                    {
                        filters: filtersService,
                        populate: ['provider', 'provider.user', 'fileImage'],
                        ...pageLimit,
                    }
                );

                return {
                    data: getServices.map((service: any) => ({
                        ...service,
                        serviceDetail: service.serviceDetail,
                    })),
                    message: 'Listado con éxito',
                    meta: {
                        pagination: {
                            page: pageNumber,
                            pageSize,
                            total: 0,
                        },
                    },
                };
            }

            const getServices = await strapi.entityService.findMany(
                'api::service.service',
                {
                    filters,
                    populate: ['provider', 'provider.user', 'fileImage'],
                    ...pageLimit,
                }
            );

            return {
                data: getServices.map((service: any) => ({
                    ...service,
                    serviceDetail: service.serviceDetail,
                })),
                message: 'Listado con éxito',
                meta: {
                    pagination: {
                        page: pageNumber,
                        pageSize,
                        total: 0,
                    },
                },
            };
        } catch (error) {
            throw error;
        }
    }
}));
