import app from '_/app';

test('sample server', async () => {
  const server = app();

  const res = await server.inject({
    method: 'GET',
    url: '/',
  });

  expect(res.statusCode).toBe(200);
});
