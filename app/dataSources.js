import { GenreAPI } from './modules/genres/genreAPI.js';

export const dataSources = () => {
    return {
        genreAPI: new GenreAPI(),
    };
};
