/**
 * request-service controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::request-service.request-service', ({ strapi }) => ({
    async customCreate(ctx) {
        const { data } = ctx.request.body;
        const result = await strapi.service('api::request-service.request-service').customCreate({ data });
        ctx.send(result);
    }
}));
