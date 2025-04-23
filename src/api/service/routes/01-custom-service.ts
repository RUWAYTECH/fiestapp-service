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
    }
  ]
}