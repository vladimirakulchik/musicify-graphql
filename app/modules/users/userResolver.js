export const userResolver = {
    Query: {
        user: (_, { id }, { dataSources }) => {
            return dataSources.userAPI.getUser(id);
        },
        jwt: (_, { email, password }, { dataSources }) => {
            return dataSources.userAPI.login(email, password);
        },
    },
    Mutation: {
        register: (_, { input }, { dataSources }) => {
            return dataSources.userAPI.createUser(input);
        },
    },
    User: {
        id: ({ _id }) => _id,
        secondName: ({ lastName }) => lastName,
    },
};
