import { mergeResolvers } from '@graphql-tools/merge';
import { genreResolver } from './modules/genres/genreResolver.js';
import { userResolver } from './modules/users/userResolver.js';

const resolvers = mergeResolvers([
    genreResolver,
    userResolver
]);

export { resolvers };
