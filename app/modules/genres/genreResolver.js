export const genreResolver = {
    Query: {
        genres: (_, { limit, offset }, { dataSources }) => {
            return dataSources.genreAPI.getGenres(limit, offset);
        },
        genre: (_, { id }, { dataSources }) => {
            return dataSources.genreAPI.getGenre(id);
        },
    },
    Genre: {
        id: ({ _id }) => (_id),
    },
};
