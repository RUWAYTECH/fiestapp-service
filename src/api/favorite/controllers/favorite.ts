/**
 * favorite controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::favorite.favorite', ({ strapi }) => ({
    async findFavorites(ctx) {
        try {
            const pagination = ctx.query.pagination || {};
            
            let page = 1;
            let pageSize = 10;
            
            if (typeof pagination === 'object' && pagination !== null) {
                if ('page' in pagination && typeof pagination.page === 'string') {
                    page = parseInt(pagination.page, 10) || 1;
                }
                
                if ('pageSize' in pagination && typeof pagination.pageSize === 'string') {
                    pageSize = parseInt(pagination.pageSize, 10) || 10;
                }
            }
            
            const result = await strapi.service('api::favorite.favorite').findFavorites({
                page,
                limit: pageSize
            });
            
            return ctx.send(result);
        } catch (error) {
            return ctx.badRequest(error.message);
        }
    }
}));