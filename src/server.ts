import app from '_/app';

const PRODUCTION = process.env.NODE_ENV === 'production';

const PORT = PRODUCTION ? 80 : 3000;
const LISTEN_ADDR = PRODUCTION ? '::' : '127.0.0.1';

const server = app({
  logger: {
    level: PRODUCTION ? 'info' : 'debug',
    prettyPrint: !PRODUCTION,
  },
});

server.listen(PORT, LISTEN_ADDR, (err, _address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
