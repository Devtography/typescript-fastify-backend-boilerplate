/* eslint-disable @typescript-eslint/no-unused-vars */
// Must have to let TSC knows we're merging the module 'fastify'
import * as fastify from 'fastify';

// Using declaration merging, add your plugin props to the appropriate
// fastify interfaces.
declare module 'fastify' {
  interface FastifyInstance {
    exampleProperty: string; // replace this with your props
  }
}
