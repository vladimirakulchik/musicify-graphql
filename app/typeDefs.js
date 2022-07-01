import { genreType } from './modules/genres/genreType.js';
import { userType } from './modules/users/userType.js';
import { bandType } from './modules/bands/bandType.js';

const typeDefs = [
    genreType,
    userType,
    bandType,
];

export { typeDefs };


// import { mergeTypeDefs } from '@graphql-tools/merge';
// const typeDefs = mergeTypeDefs([]);
