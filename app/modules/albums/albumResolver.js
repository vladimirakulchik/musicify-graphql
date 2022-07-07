export const albumResolver = {
    Query: {
        albums: (_, { limit, offset }, { dataSources }) => {
            return dataSources.albumAPI.getAlbums(limit, offset);
        },
        album: (_, { id }, { dataSources }) => {
            return dataSources.albumAPI.getAlbum(id);
        },
    },
    // Mutation: {
    //     createAlbum: (_, { input }, context) => {
    //         const { dataSources, authToken } = context;

    //         return dataSources.albumAPI.createAlbum(input, authToken);
    //     },
    //     updateAlbum: (_, { input }, context) => {
    //         const { dataSources, authToken } = context;

    //         return dataSources.albumAPI.updateAlbum(input, authToken);
    //     },
    //     deleteAlbum: (_, { id }, context) => {
    //         const { dataSources, authToken } = context;

    //         return dataSources.albumAPI.deleteAlbum(id, authToken);
    //     },
    // },
    Album: {
        id: ({ _id }) => (_id),
        artists: ({ artistsIds }, __, { dataSources }) => {
            return dataSources.artistAPI.getArtistsByIds(artistsIds);
        },
        bands: ({ bandsIds }, __, { dataSources }) => {
            return dataSources.bandAPI.getBandsByIds(bandsIds);
        },
        tracks: ({ trackIds }, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksByIds(trackIds);
        },
        genres: ({ genresIds }, __, { dataSources }) => {
            return dataSources.genreAPI.getGenresByIds(genresIds);
        },
    },
};
