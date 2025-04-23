/**
 * provider service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::provider.provider', ({ strapi }) => ({
    async customCreateOrUpdate(params) {
        try {
            const { data } = params;
            const ctx = strapi.requestContext.get();
            const authenticatedUser = ctx?.state?.user?.id;

            data.user = authenticatedUser;

            const existingProvider = await strapi.entityService.findMany('api::provider.provider', {
                filters: {
                    user: {
                        id: authenticatedUser,
                    },
                },
            })

            if (existingProvider && existingProvider.length > 0) {
                return await strapi.entityService.update('api::provider.provider', existingProvider[0].id, { data });
            }
            
            return await strapi.entityService.create('api::provider.provider', data);

        } catch (error) {
            throw error;
        }
    },
}));
