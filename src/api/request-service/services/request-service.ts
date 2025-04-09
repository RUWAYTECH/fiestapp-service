import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::request-service.request-service', ({ strapi }) => ({
    async customCreate(params) {
        try {
            const { data } = params;
            const { requestServiceDetail } = data;
            console.log(requestServiceDetail);

            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;
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
                        },
                    });
                    createdDetails.push(createdDetail);
                }
            }

            createdService.requestServiceDetail = createdDetails;

            return createdService;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
}));
