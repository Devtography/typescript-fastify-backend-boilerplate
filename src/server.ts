import createServer from '_/app';

const PRODUCTION = process.env.NODE_ENV === 'production';

const PORT = PRODUCTION ? 80 : 3000;
const LISTEN_ADDR = PRODUCTION ? '::' : '127.0.0.1';

async function startServer() {
  const server = await createServer({
    logger: {
      level: PRODUCTION ? 'info' : 'debug',
      prettyPrint: !PRODUCTION,
    },
  });

  try {
    await server.listen(PORT, LISTEN_ADDR);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  startServer().finally(() => {});
}
