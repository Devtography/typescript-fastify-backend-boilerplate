import { FastifyInstance } from 'fastify';

interface Params {
  id: number
}

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{ Params: Params }>('/', async (req, reply) => {
    const { id } = req.params;

    await reply.send({ user: id });
  });
};
