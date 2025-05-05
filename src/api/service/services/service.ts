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

            if (ubigeos && ubigeos.length > 0) {
                const existingUbigeos = await strapi.entityService.findMany('api::ubigeo.ubigeo', {
                    filters: {
                        id: {
                            $in: ubigeos
                        }
                    }
                });

                if (existingUbigeos.length !== ubigeos.length) {
                    const existingUbigeoIds = existingUbigeos.map(ubigeo => ubigeo.id);
                    const nonExistingUbigeoIds = ubigeos.filter(id => !existingUbigeoIds.includes(id));

                    throw new Error(`Los siguientes ubigeos no existen: ${nonExistingUbigeoIds.join(', ')}`);
                }
            }

            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;
            const existingProvider = await strapi.entityService.findMany('api::provider.provider', {
                filters: {
                    user: {
                        id: authenticatedUser,
                    },
                },
            });

            if (!existingProvider || existingProvider.length === 0) {
                throw new Error('No se encontró un proveedor asociado al usuario autenticado');
            }

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
            if (error.message.includes('ubigeos no existen')) {
                throw error;
            } else {
                console.error('Error al crear el servicio:', error);
                throw new Error('Ocurrió un error al crear el servicio. Verifica los datos proporcionados.');
            }
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
                populate: ['provider', 'provider.user', 'fileImage', 'category'],
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
            const { page, limit, filters = {}, sort } = params;
            const pageNumber = parseInt(page);
            const pageSize = parseInt(limit);

            const pageLimit = {
                start: (pageNumber - 1) * pageSize,
                limit: pageSize,
            };

            const hasUbigeoFilter =
                filters?.ubigeoService?.ubigeo?.id?.$eq !== undefined ||
                filters?.ubigeoService?.ubigeo?.id?.$in !== undefined;

            if (hasUbigeoFilter) {
                const { ubigeo } = filters.ubigeoService;
                let ubigeoIds = [];

                if (ubigeo.id.$eq !== undefined) {
                    ubigeoIds = [parseInt(ubigeo.id.$eq)];
                } else if (ubigeo.id.$in !== undefined) {
                    const inValue = ubigeo.id.$in;

                    if (typeof inValue === 'string') {
                        ubigeoIds = inValue.includes(',')
                            ? inValue.split(',').map(id => parseInt(id.trim()))
                            : [parseInt(inValue)];
                    } else if (Array.isArray(inValue)) {
                        ubigeoIds = inValue.map(id => parseInt(id));
                    } else {
                        ubigeoIds = [parseInt(inValue)];
                    }
                }

                const ubigeoServices = await strapi.entityService.findMany(
                    'api::ubigeo-service.ubigeo-service',
                    {
                        filters: {
                            ubigeo: {
                                id: {
                                    $in: ubigeoIds
                                }
                            },
                        },
                        populate: ['service'],
                    }
                ) as any;

                if (ubigeoServices.length === 0) {
                    return {
                        data: [],
                        message: 'No se encontraron servicios para los ubigeos especificados',
                        meta: {
                            pagination: {
                                page: pageNumber,
                                pageSize,
                                total: 0,
                            },
                        },
                    };
                }

                const serviceIds = [...new Set(
                    ubigeoServices
                        .map(item => item?.service?.id)
                        .filter(Boolean)
                )];

                if (serviceIds.length === 0) {
                    return {
                        data: [],
                        message: 'No se encontraron servicios para los ubigeos especificados',
                        meta: {
                            pagination: {
                                page: pageNumber,
                                pageSize,
                                total: 0,
                            },
                        },
                    };
                }

                const { ubigeoService: _, ...otherFilters } = filters;

                const combinedFilters = {
                    ...(serviceIds.length > 0 ? { id: { $in: serviceIds } } : {}),
                    ...otherFilters
                };

                const getServices = await strapi.entityService.findMany(
                    'api::service.service',
                    {
                        filters: combinedFilters,
                        populate: ['provider', 'provider.user', 'fileImage'],
                        ...pageLimit,
                        sort,
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
                            total: getServices.length,
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
                    sort,
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
                        total: getServices.length,
                    },
                },
            };
        } catch (error) {
            throw error;
        }
    },
    async changeState(params) {
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
                populate: ['provider', 'provider.user'],
            });

            const status = !service.state;

            if (!service) {
                throw new Error('Service not found');
            }

            await strapi.entityService.update('api::service.service', id, {
                data: {
                    state: status,
                },
                populate: ['provider', 'provider.user'],
            });

            return {
                data: service,
                message: 'Service status changed successfully',
            };
        } catch (error) {
            throw error;
        }
    },
    async customDelete(req, res) {
        try {
            const { id } = req.params;
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
                populate: ['provider', 'provider.user'],
            });

            if (!service) {
                throw new Error('Service not found');
            }

            await strapi.entityService.delete('api::service.service', id);

            return {
                data: service,
                message: 'Service deleted successfully',
            };
        } catch (error) {
            throw error;
        }
    },
}));
