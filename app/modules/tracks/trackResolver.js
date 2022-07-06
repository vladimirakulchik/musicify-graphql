export const trackResolver = {
    Query: {
        tracks: (_, { limit, offset }, { dataSources }) => {
            return dataSources.trackAPI.getTracks(limit, offset);
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },
    Track: {
        id: ({ _id }) => (_id),
        // album: () => {},
        artists: ({ artistsIds }, __, { dataSources }) => {
            return dataSources.artistAPI.getArtistsByIds(artistsIds);
        },
        bands: ({ bandsIds }, __, { dataSources }) => {
            return dataSources.bandAPI.getBandsByIds(bandsIds);
        },
        genres: ({ genresIds }, __, { dataSources }) => {
            return dataSources.genreAPI.getGenresByIds(genresIds);
        },
    },
};
