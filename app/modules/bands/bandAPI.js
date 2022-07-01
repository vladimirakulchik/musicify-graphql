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
}
