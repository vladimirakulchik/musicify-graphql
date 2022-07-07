export const trackResolver = {
    Query: {
        tracks: (_, { limit, offset }, { dataSources }) => {
            return dataSources.trackAPI.getTracks(limit, offset);
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },
    // Mutation: {
    //     createTrack: (_, { input }, context) => {
    //         const { dataSources, authToken } = context;

    //         return dataSources.trackAPI.createTrack(input, authToken);
    //     },
    //     updateTrack: (_, { input }, context) => {
    //         const { dataSources, authToken } = context;

    //         return dataSources.trackAPI.updateTrack(input, authToken);
    //     },
    //     deleteTrack: (_, { id }, context) => {
    //         const { dataSources, authToken } = context;

    //         return dataSources.trackAPI.deleteTrack(id, authToken);
    //     },
    // },
    Track: {
        id: ({ _id }) => (_id),
        album: ({ albumId }, __, { dataSources }) => {
            return dataSources.albumAPI.getAlbum(albumId);
        },
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
