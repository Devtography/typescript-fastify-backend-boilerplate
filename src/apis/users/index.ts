import { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async (_req, _reply) => 'pong');
};
