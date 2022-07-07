import { RESTDataSource } from 'apollo-datasource-rest';

export class AlbumAPI extends RESTDataSource {
    constructor(baseURL) {
        super();
        this.baseURL = baseURL;
    }

    async getAlbums(limit = 5, offset = 0) {
        const albums = await this.get('/', {
            limit,
            offset,
        });

        return albums.items;
    }

    async getAlbum(albumId) {
        const album = await this.get(`/${albumId}`);

        return album;
    }

    async getAlbumsByIds(albumsIds) {
        const promises = albumsIds.map((id) => {
            return this.getAlbum(id);
        });
        const albums = await Promise.all(promises);

        return albums;
    }

    async createAlbum(input, authToken) {
        const album = await this.post(
            '/',
            this.getAlbumBody(input),
            this.getAuthHeader(authToken)
        );

        return album;
    }

    async updateAlbum(input, authToken) {
        const albumId = input.id;
        const album = await this.put(
            `/${albumId}`,
            this.getAlbumBody(input),
            this.getAuthHeader(authToken)
        );

        return album;
    }

    async deleteAlbum(albumId, authToken) {
        const result = await this.delete(
            `/${albumId}`,
            {},
            this.getAuthHeader(authToken)
        );

        return result;
    }

    getAlbumBody(input) {
        return {
            name: input.name,
            released: input.released,
            artistsIds: input.artistsIds,
            bandsIds: input.bandsIds,
            trackIds: input.tracksIds,
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
