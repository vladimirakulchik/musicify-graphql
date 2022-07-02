export const bandResolver = {
    Query: {
        bands: (_, { limit, offset }, { dataSources }) => {
            return dataSources.bandAPI.getBands(limit, offset);
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandAPI.getBand(id);
        },
    },
    Mutation: {
        createBand: (_, { input }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.bandAPI.createBand(input, authToken);
        },
        updateBand: (_, { input }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.bandAPI.updateBand(input, authToken);
        },
        deleteBand: (_, { id }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.bandAPI.deleteBand(id, authToken);
        },
    },
    Band: {
        id: ({ _id }) => (_id),
        genres: ({ genresIds }, __, { dataSources }) => {
            return dataSources.genreAPI.getGenresByIds(genresIds);
        },
    },
};
