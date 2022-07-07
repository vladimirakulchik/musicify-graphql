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
}
