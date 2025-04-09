export default {
    routes: [
      // { // Path defined with a URL parameter
      //   method: 'GET',
      //   path: '/request-services/get-massive',
      //   handler: 'request-service.getMassive',
      // },
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/request-services/custom-create',
        handler: 'request-service.customCreate',
        config: {
          policies: [],
          middlewares: [],
        },
      }
    ]
  }