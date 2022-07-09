export const artistResolver = {
    Query: {
        artists: (_, { limit, offset }, { dataSources }) => {
            return dataSources.artistAPI.getArtists(limit, offset);
        },
        artist: (_, { id }, { dataSources }) => {
            return dataSources.artistAPI.getArtist(id);
        },
    },
    Mutation: {
        createArtist: (_, { input }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.artistAPI.createArtist(input, authToken);
        },
        updateArtist: (_, { input }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.artistAPI.updateArtist(input, authToken);
        },
        deleteArtist: (_, { id }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.artistAPI.deleteArtist(id, authToken);
        },
    },
    Artist: {
        id: ({ _id }) => (_id),
        bands: ({ bandsIds }, __, { dataSources }) => {
            return dataSources.bandAPI.getBandsByIds(bandsIds);
        },
    },
};
