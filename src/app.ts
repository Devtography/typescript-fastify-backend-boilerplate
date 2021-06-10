import * as path from 'path';
import { fastify, FastifyInstance } from 'fastify';
import fastifyAutoload from 'fastify-autoload';
import fastifyCors from 'fastify-cors';

async function createServer(opts = {}): Promise<FastifyInstance> {
  const app = fastify(opts);

  // Registers plugins from Fastify ecosystem.
  await app.register(fastifyCors);
  await app.register(fastifyAutoload, {
    dir: path.join(__dirname, 'apis'),
    routeParams: true,
  });

  await app.ready();

  return app;
}

export default createServer;
