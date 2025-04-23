import { factories } from '@strapi/strapi';
const emailUtils = require('../../../utils/email');

export default factories.createCoreService('api::request-service.request-service', ({ strapi }) => ({
    async customCreate(params) {
        try {
            const { data } = params;
            const { requestServiceDetail } = data;

            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;
            const authenticatedUserData = ctx?.state?.user;
            const createdService = await super.create({
                data: {
                    ...data,
                    user: authenticatedUser,
                },
            });

            const requestServiceId = createdService.id;

            const details = Array.isArray(requestServiceDetail) ? requestServiceDetail : [requestServiceDetail];

            const createdDetails = [];
            for (const detail of details) {
                if (detail && typeof detail === 'object') {
                    detail.requestService = requestServiceId;
                    const createdDetail = await strapi.entityService.create('api::request-service-detail.request-service-detail', {
                        data: {
                            ...detail,
                            service: detail.service,
                        },
                    });
                    createdDetails.push(createdDetail);
                }
            }

            createdService.requestServiceDetail = createdDetails;

            // await emailUtils.sendServiceRequestConfirmation(authenticatedUserData, createdService);
            // const providerId = data.provider;
            // const providerData = await strapi.entityService.findOne(
            //     'api::provider.provider',
            //     providerId,
            //     {
            //       populate: ['user'],
            //     }
            //   ) as any;
            // await emailUtils.sendAdminNotification(providerData.user, createdService);

            return createdService;
        } catch (error) {
            throw error;
        }
    },

    async getRequestServices(params) {
        try {
            const { page, limit } = params;
            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;

            const pageNumber = parseInt(page);
            const pageSize = parseInt(limit);

            if (!authenticatedUser) {
                return {
                    data: [],
                    message: 'Usuario no autenticado',
                    meta: {
                        pagination: {
                            page,
                            pageSize: limit,
                            total: 0,
                        },
                    },
                };
            }

            const filters = {
                user: authenticatedUser,
            };

            const pageLimit = {
                start: (pageNumber - 1) * pageSize,
                limit,
            }

            const services = await strapi.entityService.findMany('api::request-service.request-service', {
                filters,
                populate: ['provider', 'user'],
                ...pageLimit,
            });

            const count = await strapi.db.query('api::request-service.request-service').count({
                where: {
                    user: authenticatedUser
                }
            });

            const requestServiceIds = services.map((service: any) => service.id);

            if (requestServiceIds.length === 0) {
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

            const details = await strapi.entityService.findMany('api::request-service-detail.request-service-detail', {
                filters: {
                    requestService: {
                        $in: requestServiceIds,
                    },
                },
                populate: ['requestService', 'service'] as any,
            } as any);

            return {
                data: services.map((service: any) => {
                    const serviceDetails = details
                        .filter((detail: any) =>
                            detail.requestService && detail.requestService.id === service.id
                        )
                        .map((detail: any) => {
                            const { requestService, ...detailWithoutRequestService } = detail;
                            return detailWithoutRequestService;
                        });

                    return {
                        ...service,
                        requestServiceDetails: serviceDetails,
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

    async customUpdate(id, params) {
        try {
            const { data } = params;
            const { requestServiceDetail } = data;
            let finalPrice = 0;
            const result = [];
            if (requestServiceDetail && requestServiceDetail.length > 0) {
                const details = Array.isArray(requestServiceDetail) ? requestServiceDetail : [requestServiceDetail];
                let savedDetail;
                for (const detail of details) {
                    if (detail && typeof detail === 'object' && detail.priceFinal) {
                        finalPrice += parseFloat(detail.priceFinal) * parseFloat(detail.quantity);
                    }
                    if (detail && typeof detail === 'object' && detail.id) {
                        savedDetail = await strapi.entityService.update('api::request-service-detail.request-service-detail', detail.id, {
                            data: {
                                ...detail,
                                requestService: id,
                                service: detail.service,
                            }
                        });
                    } else {
                        savedDetail = await strapi.entityService.create('api::request-service-detail.request-service-detail', {
                            data: {
                                ...detail,
                                requestService: id,
                                service: detail.service,
                            }
                        });
                    }
                    result.push(savedDetail);
                }
            }
            const updatedService = await strapi.entityService.update('api::request-service.request-service', id, {
                data: {
                    ...data,
                    provider: data.provider,
                    totalPriceFinal: finalPrice,
                }
            });
            return {
                data: {
                    ...updatedService,
                    requestServiceDetail: result,
                },
            }
        } catch (error) {
            throw error;
        }
    },

    async getRequestServiceByProvider(params) {
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
            const requestServiceDetail = await strapi.entityService.findMany('api::request-service-detail.request-service-detail', {
                filters: {
                    service: {
                        provider: {
                            user: {
                                id: authenticatedUser,
                            },
                        },
                    },
                },
                populate: {
                    service: {
                        populate: ['provider', 'provider.user'],
                    },
                    requestService: true,
                },
            });

            const requestServiceIds = requestServiceDetail.map((detail: any) => detail.requestService.id);

            const requestServices = await strapi.entityService.findMany('api::request-service.request-service', {
                filters: {
                    id: {
                        $in: requestServiceIds,
                    },
                },
                ...pageLimit,
            });

            const count = await strapi.db.query('api::request-service.request-service').count({
                where: {
                    id: {
                        $in: requestServiceIds,
                    },
                }
            });

            return {
                data: requestServices.map((service: any) => {
                    const serviceDetails = requestServiceDetail
                        .filter((detail: any) =>
                            detail.requestService && detail.requestService.id === service.id
                        )
                        .map((detail: any) => {
                            const { requestService, ...detailWithoutRequestService } = detail;
                            return detailWithoutRequestService;
                        });

                    return {
                        ...service,
                        requestServiceDetails: serviceDetails,
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
            };

        } catch (error) {
            throw error;
        }
    }
}));

