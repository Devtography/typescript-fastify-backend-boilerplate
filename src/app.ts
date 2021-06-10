import { fastify, FastifyInstance } from 'fastify';

async function build(opts = {}): Promise<FastifyInstance> {
  const app = fastify(opts);

  app.get('/', async (_req, _reply) => ({ hello: 'world' }));

  await app.ready();

  return app;
}

export default build;
