/**
 * provider controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::provider.provider', ({ strapi }) => ({
    async customCreateOrUpdate(ctx) {
        try {
            const { data } = ctx.request.body;

            const provider = await strapi.service('api::provider.provider').customCreateOrUpdate({
                data,
            });

            return provider;
        } catch (error) {
            throw error;
        }
    },
}));
