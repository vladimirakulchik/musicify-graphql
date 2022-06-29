export const resolvers = {
    Query: {
        genres: (parent, args, { dataSources }) => {
            return dataSources.genresAPI.genres();
        },
    },
};
