import { mergeResolvers } from '@graphql-tools/merge';
import { genreResolver } from './modules/genres/genreResolver.js'

const resolvers = mergeResolvers([
    genreResolver
]);

export { resolvers };
