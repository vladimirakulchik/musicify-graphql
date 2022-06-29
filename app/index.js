import { ApolloServer } from 'apollo-server';
import { typeDefs } from './modules/genres/schema.js';
import { resolvers } from './modules/genres/resolvers.js';
import { GenresAPI } from './modules/genres/datasources/genres-api.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        genresAPI: new GenresAPI(),
    })
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
