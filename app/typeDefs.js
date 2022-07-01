import { genreType } from './modules/genres/genreType.js';
import { userType } from './modules/users/userType.js';

const typeDefs = [
    genreType,
    userType,
];

export { typeDefs };


// import { mergeTypeDefs } from '@graphql-tools/merge';
// const typeDefs = mergeTypeDefs([]);
