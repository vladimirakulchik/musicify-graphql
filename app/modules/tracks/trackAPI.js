import { RESTDataSource } from 'apollo-datasource-rest';

export class TrackAPI extends RESTDataSource {
    constructor(baseURL) {
        super();
        this.baseURL = baseURL;
    }

    async getTracks(limit = 5, offset = 0) {
        const tracks = await this.get('/', {
            limit,
            offset,
        });

        return tracks.items;
    }

    async getTrack(trackId) {
        const track = await this.get(`/${trackId}`);

        return track;
    }

    async getTracksByIds(tracksIds) {
        const promises = tracksIds.map((id) => {
            return this.getTrack(id);
        });
        const tracks = await Promise.all(promises);

        return tracks;
    }
}
