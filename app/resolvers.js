import { mergeResolvers } from '@graphql-tools/merge';
import { artistResolver } from './modules/artists/artistResolver.js';
import { bandResolver } from './modules/bands/bandResolver.js';
import { genreResolver } from './modules/genres/genreResolver.js';
import { userResolver } from './modules/users/userResolver.js';

const resolvers = mergeResolvers([
    genreResolver,
    userResolver,
    bandResolver,
    artistResolver,
]);

export { resolvers };
