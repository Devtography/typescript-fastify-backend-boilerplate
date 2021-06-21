import { FastifyInstance, RequestGenericInterface } from 'fastify';

interface ReqSchema extends RequestGenericInterface {
  Params: {
    id: number
  }
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
  fastify.get<ReqSchema>('/', opts, async (req, reply) => {
    const { id } = req.params;

    await reply.code(200).send({ user: id });
  });
};
