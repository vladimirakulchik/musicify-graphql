import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import { dataSources } from './dataSources.js';

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});
