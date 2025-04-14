export default {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/favorites/find-favorites',
        handler: 'favorite.findFavorites',
        config: {
          policies: [],
          middlewares: [],
        },
      }
    ]
  }