import { fastify, FastifyInstance } from 'fastify';
import fastifyCors from 'fastify-cors';

async function createServer(opts = {}): Promise<FastifyInstance> {
  const app = fastify(opts);

  // Registers plugins from Fastify ecosystem.
  await app.register(fastifyCors);

  app.get('/', async (_req, _reply) => ({ hello: 'world' }));

  await app.ready();

  return app;
}

export default createServer;
