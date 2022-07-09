import { mergeResolvers } from '@graphql-tools/merge';
import { albumResolver } from './modules/albums/albumResolver.js';
import { artistResolver } from './modules/artists/artistResolver.js';
import { bandResolver } from './modules/bands/bandResolver.js';
import { favouritesResolver } from './modules/favourites/favouritesResolver.js';
import { genreResolver } from './modules/genres/genreResolver.js';
import { trackResolver } from './modules/tracks/trackResolver.js';
import { userResolver } from './modules/users/userResolver.js';

const resolvers = mergeResolvers([
    genreResolver,
    userResolver,
    bandResolver,
    artistResolver,
    trackResolver,
    albumResolver,
    favouritesResolver,
]);

export { resolvers };
