import { RESTDataSource } from 'apollo-datasource-rest';

export class UserAPI extends RESTDataSource {
    constructor(baseURL) {
        super();
        this.baseURL = baseURL;
    }

    async getUser(userId) {
        const user = await this.get(`/${userId}`);

        return user;
    }

    async login(email, password) {
        const token = await this.post(
            '/login',
            {
                email,
                password,
            }
        );

        return token.jwt;
    }

    async createUser(input) {
        const user = await this.post (
            '/register',
            {
                firstName: input.firstName,
                lastName: input.secondName,
                password: input.password,
                email: input.email,
            }
        );

        return user;
    }
}
