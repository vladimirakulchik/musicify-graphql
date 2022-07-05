import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistAPI extends RESTDataSource {
    constructor(baseURL) {
        super();
        this.baseURL = baseURL;
    }

    async getArtists(limit = 5, offset = 0) {
        const artists = await this.get('/', {
            limit,
            offset,
        });

        return artists.items;
    }

    async getArtist(artistId) {
        const artist = await this.get(`/${artistId}`);

        return artist;
    }

    async getArtistsByIds(artistsIds) {
        const promises = artistsIds.map((id) => {
            return this.getArtist(id);
        });
        const artists = await Promise.all(promises);

        return artists;
    }

    async createArtist(input, authToken) {
        const artist = await this.post(
            '/',
            this.getArtistBody(input),
            this.getAuthHeader(authToken)
        );

        return artist;
    }

    async updateArtist(input, authToken) {
        const artistId = input.id;
        const artist = await this.put(
            `/${artistId}`,
            this.getArtistBody(input),
            this.getAuthHeader(authToken)
        );

        return artist;
    }

    async deleteArtist(artistId, authToken) {
        const result = await this.delete(
            `/${artistId}`,
            {},
            this.getAuthHeader(authToken)
        );

        return result;
    }

    getArtistBody(input) {
        return {
            firstName: input.firstName,
            secondName: input.secondName,
            middleName: input.middleName,
            birthDate: input.birthDate,
            birthPlace: input.birthPlace,
            country: input.country,
            bandsIds: input.bandsIds,
            instruments: input.instruments
        };
    }

    getAuthHeader(authToken) {
        return {
            headers: {
                'Authorization': authToken,
            },
        };
    }
}
