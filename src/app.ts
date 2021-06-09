import { fastify, FastifyInstance } from 'fastify';

function build(opts = {}): FastifyInstance {
  const app = fastify(opts);

  app.get('/', async (_req, _reply) => ({ hello: 'world' }));

  return app;
}

export default build;
