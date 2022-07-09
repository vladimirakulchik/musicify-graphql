import { RESTDataSource } from 'apollo-datasource-rest';

export class FavouritesAPI extends RESTDataSource {
    constructor(baseURL) {
        super();
        this.baseURL = baseURL;
    }

    async getFavourites(authToken) {
        const result = await this.get(
            '/',
            {},
            this.getAuthHeader(authToken)
        );

        return result;
    }

    async addTrack(id, authToken) {
        const result = await this.addToFavourites('tracks', id, authToken);

        return result;
    }

    async addBand(id, authToken) {
        const result = await this.addToFavourites('bands', id, authToken);

        return result;
    }

    async addArtist(id, authToken) {
        const result = await this.addToFavourites('artists', id, authToken);

        return result;
    }

    async addGenre(id, authToken) {
        const result = await this.addToFavourites('genres', id, authToken);

        return result;
    }

    async addToFavourites(type, id, authToken) {
        return this.put(
            '/add',
            {
                type,
                id,
            },
            this.getAuthHeader(authToken)
        );
    }

    getAuthHeader(authToken) {
        return {
            headers: {
                'Authorization': authToken,
            },
        };
    }
}
