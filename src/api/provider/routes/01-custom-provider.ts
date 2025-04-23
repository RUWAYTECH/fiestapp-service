export default {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/providers/custom-create-or-update',
      handler: 'provider.customCreateOrUpdate',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ]
}