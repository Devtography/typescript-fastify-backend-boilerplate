import { FastifyInstance } from 'fastify';

interface Params {
  id: number
}

// Request schema validation & response serialisation
const opts = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'number' },
      },
    },
  },
  response: {
    200: {
      type: 'object',
      user: 'number',
    },
  },
};

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<{ Params: Params }>('/', opts, async (req, reply) => {
    const { id } = req.params;

    await reply.code(200).send({ user: id });
  });
};
