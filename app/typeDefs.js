import { genreType } from './modules/genres/genreType.js';

const typeDefs = [
    genreType
];

export { typeDefs };


// import { mergeTypeDefs } from '@graphql-tools/merge';

// const typeDefs = mergeTypeDefs([
//     genreResolver
// ]);
