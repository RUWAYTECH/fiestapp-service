export default {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/request-services/get-request-services',
      handler: 'request-service.getRequestServices',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/request-services/custom-create',
      handler: 'request-service.customCreate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/request-services/custom-update/:id',
      handler: 'request-service.customUpdate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/request-services/get-request-service-by-provider',
      handler: 'request-service.getRequestServiceByProvider',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ]
}