import app from '_/app';

const server = app({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

server.listen(3000, (err, _address) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  }
});
