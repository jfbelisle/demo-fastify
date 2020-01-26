const oas = require('fastify-oas');

const apiRoutes = async (app, options) => {
  app.register(oas, require('../../docs-config'));
  app.register(require('./persons'), { prefix: 'persons' });
  app.register(require('./products'), { prefix: 'products' });
  app.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
};

module.exports = apiRoutes;
