import { albumType } from './modules/albums/albumType.js';
import { artistType } from './modules/artists/artistType.js';
import { bandType } from './modules/bands/bandType.js';
import { favouritesType } from './modules/favourites/favouritesType.js';
import { genreType } from './modules/genres/genreType.js';
import { trackType } from './modules/tracks/trackType.js';
import { userType } from './modules/users/userType.js';

const typeDefs = [
    genreType,
    userType,
    bandType,
    artistType,
    trackType,
    albumType,
    favouritesType,
];

export { typeDefs };
