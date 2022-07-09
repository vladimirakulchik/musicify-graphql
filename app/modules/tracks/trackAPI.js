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

    async createTrack(input, authToken) {
        const track = await this.post(
            '/',
            this.getTrackBody(input),
            this.getAuthHeader(authToken)
        );

        return track;
    }

    async updateTrack(input, authToken) {
        const trackId = input.id;
        const track = await this.put(
            `/${trackId}`,
            this.getTrackBody(input),
            this.getAuthHeader(authToken)
        );

        return track;
    }

    async deleteTrack(trackId, authToken) {
        const result = await this.delete(
            `/${trackId}`,
            {},
            this.getAuthHeader(authToken)
        );

        return result;
    }

    getTrackBody(input) {
        return {
            title: input.title,
            albumId: input.albumId,
            artistsIds: input.artistsIds,
            bandsIds: input.bandsIds,
            duration: input.duration,
            released: input.released,
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
