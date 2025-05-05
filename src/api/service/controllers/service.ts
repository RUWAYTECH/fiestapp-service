/**
 * service controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::service.service', ({ strapi }) => ({
  async getServices(ctx) {
    try {
      const pagination = ctx.query.pagination || {};

      let page = 1;
      let pageSize = 25;

      if (typeof pagination === 'object' && pagination !== null) {
        if ('page' in pagination && typeof pagination.page === 'string') {
          page = parseInt(pagination.page, 10) || 1;
        }

        if ('pageSize' in pagination && typeof pagination.pageSize === 'string') {
          pageSize = parseInt(pagination.pageSize, 10) || 10;
        }
      }

      const result = await strapi.service('api::service.service').getServices({
        page,
        limit: pageSize
      });

      return ctx.send(result);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
  async customCreate(ctx) {
    try {
      const { data } = ctx.request.body;
      const result = await strapi.service('api::service.service').customCreate({
        data,
      });
      return ctx.send(result);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
  async serviceById(ctx) {
    try {
      const { id } = ctx.params;
      const result = await strapi.service('api::service.service').serviceById({
        id,
      });
      return ctx.send(result);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
  async customUpdate(ctx) {
    try {
      const { id } = ctx.params;
      const { data } = ctx.request.body;
      const result = await strapi.service('api::service.service').customUpdate(id, {
        data,
      });
      return ctx.send(result);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
  async getServicesByFilters(ctx) {
    try {
      const pagination = ctx.query.pagination || {};

      let page = 1;
      let pageSize = 25;

      if (typeof pagination === 'object' && pagination !== null) {
        if ('page' in pagination && typeof pagination.page === 'string') {
          page = parseInt(pagination.page, 10) || 1;
        }

        if ('pageSize' in pagination && typeof pagination.pageSize === 'string') {
          pageSize = parseInt(pagination.pageSize, 10) || 10;
        }
      }
      const filters = ctx.query.filters || {};

      const result = await strapi.service('api::service.service').getServicesByFilters({
        page,
        limit: pageSize,
        filters,
      });

      return ctx.send(result);
      
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
  async changeState(ctx) {
    try {
      const { id } = ctx.params;
      const result = await strapi.service('api::service.service').changeState({
        id,
      });
      return ctx.send(result);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
  async customDelete(ctx) {
    try {
      const { id } = ctx.params;
      const result = await strapi.service('api::service.service').customDelete({
        id,
      });
      return ctx.send(result);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
}));
