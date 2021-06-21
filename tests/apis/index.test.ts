import createServer from '_/app';
import { FastifyInstance } from 'fastify';

let server: FastifyInstance;

beforeAll(async () => {
  server = await createServer();
});

describe('APIs - /', () => {
  test('GET /', async () => {
    const res = await server.inject().get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatch('hello world');
  });

  test('POST /', async () => {
    const res = await server.inject().post('/').body({ action: 'ping' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toMatch('pong');
  });

  test('Invalid POST /', async () => {
    const res = await server.inject().post('/').body({ action: '' });

    expect(res.statusCode).toBe(400);
  });
});

afterAll(async () => {
  await server.close();
});
