export const bandResolver = {
    Query: {
        bands: (_, { limit, offset }, { dataSources }) => {
            return dataSources.bandAPI.getBands(limit, offset);
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandAPI.getBand(id);
        },
    },
    Band: {
        id: ({ _id }) => (_id),
        genres: ({ genresIds }, __, { dataSources }) => {
            return dataSources.genreAPI.getGenresByIds(genresIds);
        },
    },
};
