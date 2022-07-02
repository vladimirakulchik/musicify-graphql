export const genreResolver = {
    Query: {
        genres: (_, { limit, offset }, { dataSources }) => {
            return dataSources.genreAPI.getGenres(limit, offset);
        },
        genre: (_, { id }, { dataSources }) => {
            return dataSources.genreAPI.getGenre(id);
        },
    },
    Mutation: {
        createGenre: (_, { input }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.genreAPI.createGenre(input, authToken);
        },
        updateGenre: (_, { input }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.genreAPI.updateGenre(input, authToken);
        },
        deleteGenre: (_, { id }, context) => {
            const { dataSources, authToken } = context;

            return dataSources.genreAPI.deleteGenre(id, authToken);
        },
    },
    Genre: {
        id: ({ _id }) => (_id),
    },
};
