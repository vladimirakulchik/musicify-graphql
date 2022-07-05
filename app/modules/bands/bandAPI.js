import { RESTDataSource } from 'apollo-datasource-rest';

export class BandAPI extends RESTDataSource {
    constructor(baseURL) {
        super();
        this.baseURL = baseURL;
    }

    async getBands(limit = 5, offset = 0) {
        const bands = await this.get('/', {
            limit,
            offset,
        });

        return bands.items;
    }

    async getBand(bandId) {
        const band = await this.get(`/${bandId}`);

        return band;
    }

    async getBandsByIds(bandsIds) {
        const promises = bandsIds.map((id) => {
            return this.getBand(id);
        });
        const bands = await Promise.all(promises);

        return bands;
    }

    async createBand(input, authToken) {
        const band = await this.post(
            '/',
            this.getBandBody(input),
            this.getAuthHeader(authToken)
        );

        return band;
    }

    async updateBand(input, authToken) {
        const bandId = input.id;
        const band = await this.put(
            `/${bandId}`,
            this.getBandBody(input),
            this.getAuthHeader(authToken)
        );

        return band;
    }

    async deleteBand(bandId, authToken) {
        const result = await this.delete(
            `/${bandId}`,
            {},
            this.getAuthHeader(authToken)
        );

        return result;
    }

    getBandBody(input) {
        return {
            name: input.name,
            origin: input.origin,
            website: input.website,
            members: input.members,
            genresIds: input.genresIds,
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
