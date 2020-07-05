import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { initializeDotEnv } from './lib/dotenv';
import logger from './lib/logger';
import { buildSchema } from 'type-graphql';
import glob from 'glob';

initializeDotEnv(process.env.NODE_ENV || 'development');

const PORT = process.env.PORT || 4000;

const main = async () => {
  const isDistributedFile = process.argv[1].match(/\/dist$/);
  const resolvers = glob
    .sync(isDistributedFile ? '**/*.module.js' : '**/*.module.ts', {
      absolute: true,
    })
    .map((filePath) => require(filePath).default['resolvers'])
    .flat(1);

  // @ts-ignore
  const schema = await buildSchema({ resolvers });

  const server = new ApolloServer({
    schema,
    introspection: true,
  });

  const app = express();
  app.enable('trust proxy');
  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
    logger.info(`🚀 Server ready at PORT ${PORT}`)
  );
};

main();
