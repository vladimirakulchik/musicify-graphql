import { GenreAPI } from './modules/genres/genreAPI.js';
import { UserAPI } from './modules/users/userAPI.js';
import { BandAPI } from './modules/bands/bandAPI.js';

export const dataSources = () => {
    return {
        genreAPI: new GenreAPI(process.env.GENRE_API),
        userAPI: new UserAPI(process.env.USER_API),
        bandAPI: new BandAPI(process.env.BAND_API),
    };
};
