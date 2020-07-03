import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { initializeDotEnv } from './lib/dotenv';
import logger from './lib/logger';

initializeDotEnv(process.env.NODE_ENV || 'development');

const PORT = process.env.PORT || 4000;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  logger.info(`🚀 Server ready at PORT ${PORT}`)
);
