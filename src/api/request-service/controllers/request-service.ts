/**
 * request-service controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::request-service.request-service', ({ strapi }) => ({
  async customCreate(ctx) {
    const { data } = ctx.request.body;
    const result = await strapi.service('api::request-service.request-service').customCreate({ data });
    ctx.send(result);
  },
  async getRequestServices(ctx) {
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

      const result = await strapi.service('api::request-service.request-service').getRequestServices({
        page,
        limit: pageSize
      });

      return ctx.send(result);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
  async customUpdate(ctx) {
    const { id } = ctx.params;

    const { data } = ctx.request.body;

    const result = await strapi.service('api::request-service.request-service').customUpdate(id, { data });
    ctx.send(result);
  },
}));
