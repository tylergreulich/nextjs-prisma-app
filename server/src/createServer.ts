import { GraphQLServer } from 'graphql-yoga';

import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { db } from './db';

export const createServer = () =>
  new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
