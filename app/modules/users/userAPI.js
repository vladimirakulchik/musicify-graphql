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
                password
            }
        );

        return token.jwt;
    }
}
