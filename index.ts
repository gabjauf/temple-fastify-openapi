import Fastify from 'fastify';
import * as middleware from './generated/middlewares'
const fastify = Fastify({
  logger: true,
});

console.log(middleware)

// Declare a route
Object.entries({ ...middleware}).forEach(([operationId, fn]) => {
  console.log(operationId)
  middleware[operationId](fastify)
})

// middleware.addPet(fastify)
// middleware.uploadFile(fastify)

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  // Server is now listening on ${address}
});
