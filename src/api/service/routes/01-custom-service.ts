export default {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/services/get-services',
      handler: 'service.getServices',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/services/custom-create',
      handler: 'service.customCreate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/services/service-by-id/:id',
      handler: 'service.serviceById',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/services/custom-update/:id',
      handler: 'service.customUpdate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/services/get-services-by-filters',
      handler: 'service.getServicesByFilters',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PATCH',
      path: '/services/change-state/:id',
      handler: 'service.changeState',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/services/custom-delete/:id',
      handler: 'service.customDelete',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ]
}