import { mergeResolvers } from '@graphql-tools/merge';
import { genreResolver } from './modules/genres/genreResolver.js';
import { userResolver } from './modules/users/userResolver.js';
import { bandResolver } from './modules/bands/bandResolver.js';

const resolvers = mergeResolvers([
    genreResolver,
    userResolver,
    bandResolver,
]);

export { resolvers };
