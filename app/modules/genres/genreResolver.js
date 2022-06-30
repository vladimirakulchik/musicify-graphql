export const genreResolver = {
    Query: {
        genres: (parent, args, { dataSources }) => {
            return dataSources.genreAPI.getGenres();
        },
        genre: (parent, { id }, { dataSources }) => {
            return dataSources.genreAPI.getGenre(id);
        },
    },
    Genre: {
        id: ({ _id }, args, context) => (_id),
    },
};
