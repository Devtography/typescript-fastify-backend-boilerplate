import createServer from '_/app';
import { FastifyInstance } from 'fastify';

let server: FastifyInstance;

beforeAll(async () => {
  server = await createServer();
});

describe('APIs - /users', () => {
  it('should redirect to index', async () => {
    const res = await server.inject().get('/users');
    expect(res.statusCode).toBe(302);
  });

  it('should return true on user id validation', async () => {
    const res = await server.inject().get('/users').query({ id: 1 });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ user_id: 1, validated: true });
  });

  it('should return false on user id validation', async () => {
    const res = await server.inject().get('/users').query({ id: 10 });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ user_id: 10, validated: false });
  });
});

describe('API - /users/:id', () => {
  it('should return user id passed in', async () => {
    const res = await server.inject().get('/users/1');

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ user: 1 });
  });
});

afterAll(async () => {
  await server.close();
});
