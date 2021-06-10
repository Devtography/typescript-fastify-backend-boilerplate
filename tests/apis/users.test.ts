import createServer from '_/app';
import { FastifyInstance } from 'fastify';

let server: FastifyInstance;

beforeAll(async () => {
  server = await createServer();
});

test('users', async () => {
  const res = await server.inject().get('/users');

  expect(res.statusCode).toBe(200);
  expect(res.body).toMatch('pong');
});

test('user by id', async () => {
  const res = await server.inject().get('/users/1');

  expect(res.statusCode).toBe(200);
  expect(res.json()).toEqual({ user: '1' });
});

afterAll(async () => {
  await server.close();
});
