export const favouritesResolver = {
    Query: {
        favourites: (_, __, context) => {
            const { dataSources, authToken } = context;

            return dataSources.favouritesAPI.getFavourites(authToken);
        },
    },
    Mutation: {
        addTrackToFavourites: (_, { id }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.favouritesAPI.addTrack(id, authToken);
        },
        addBandToFavourites: (_, { id }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.favouritesAPI.addBand(id, authToken);
        },
        addArtistToFavourites: (_, { id }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.favouritesAPI.addArtist(id, authToken);
        },
        addGenreToFavourites: (_, { id }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.favouritesAPI.addGenre(id, authToken);
        },
    },
    Favourites: {
        id: ({ _id }) => (_id),
        bands: ({ bandsIds }, __, { dataSources }) => {
            return dataSources.bandAPI.getBandsByIds(bandsIds);
        },
        genres: ({ genresIds }, __, { dataSources }) => {
            return dataSources.genreAPI.getGenresByIds(genresIds);
        },
        artists: ({ artistsIds }, __, { dataSources }) => {
            return dataSources.artistAPI.getArtistsByIds(artistsIds);
        },
        tracks: ({ tracksIds }, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksByIds(tracksIds);
        },
    },
};
