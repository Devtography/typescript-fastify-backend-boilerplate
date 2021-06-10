import createServer from '_/app';

test('create server', async () => {
  await expect(createServer()).resolves.not.toThrow();
});
