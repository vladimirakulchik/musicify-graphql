import { AlbumAPI } from './modules/albums/albumAPI.js';
import { ArtistAPI } from './modules/artists/artistAPI.js';
import { BandAPI } from './modules/bands/bandAPI.js';
import { GenreAPI } from './modules/genres/genreAPI.js';
import { TrackAPI } from './modules/tracks/trackAPI.js';
import { UserAPI } from './modules/users/userAPI.js';

export const dataSources = () => {
    return {
        albumAPI: new AlbumAPI(process.env.ALBUM_API),
        artistAPI: new ArtistAPI(process.env.ARTIST_API),
        bandAPI: new BandAPI(process.env.BAND_API),
        genreAPI: new GenreAPI(process.env.GENRE_API),
        trackAPI: new TrackAPI(process.env.TRACK_API),
        userAPI: new UserAPI(process.env.USER_API),
    };
};
