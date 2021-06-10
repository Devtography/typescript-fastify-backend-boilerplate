import createServer from '_/app';
import { FastifyInstance } from 'fastify';

let server: FastifyInstance;

beforeAll(async () => {
  server = await createServer();
});

test('root api', async () => {
  const res = await server.inject().get('/');

  expect(res.statusCode).toBe(200);
  expect(res.body).toMatch('hello world');
});

afterAll(async () => {
  await server.close();
});
