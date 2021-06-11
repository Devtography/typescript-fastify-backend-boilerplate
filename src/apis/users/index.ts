import { FastifyInstance, RequestGenericInterface } from 'fastify';

interface ReqSchema extends RequestGenericInterface {
  Querystring: {
    id?: number
  }
}

// Request schema validation & response serialisation
const opts = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          nullable: true,
        },
      },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        user_id: { type: 'number' },
        validated: { type: 'boolean' },
      },
    },
  },
};

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get<ReqSchema>('/', opts, async (req, reply) => {
    const { id } = req.query;

    if (id == null) {
      await reply.redirect('/');
    } else {
      await reply.code(200).send({
        user_id: id,
        validated: id < 10,
      });
    }
  });
};
