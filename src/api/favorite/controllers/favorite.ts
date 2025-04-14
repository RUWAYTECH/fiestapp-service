/**
 * favorite controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::favorite.favorite', ({ strapi }) => ({
    async findFavorites(ctx) {
        try {
            const result = await strapi.service('api::favorite.favorite').findFavorites();
            return ctx.send(result);
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    }
}));