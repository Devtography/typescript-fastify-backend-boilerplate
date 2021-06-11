import { FastifyInstance, RequestGenericInterface } from 'fastify';

interface PostReqSchema extends RequestGenericInterface {
  Body: { action: 'ping' }
}

// Request schema validation & response serialisation for POST API
const postOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['action'],
      properties: {
        action: { type: 'string', enum: ['ping'] },
      },
    },
  },
  response: {
    200: {
      value: { type: 'string' },
    },
  },
};

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async (_req, _reply) => 'hello world');

  fastify.post<PostReqSchema>('/', postOpts, async (req, reply) => {
    await reply.code(200).send('pong');
  });
};
