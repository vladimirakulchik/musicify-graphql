import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreAPI extends RESTDataSource {
    constructor(baseURL) {
        super();
        this.baseURL = baseURL;
    }

    async getGenres(limit = 5, offset = 0) {
        const genres = await this.get('/', {
            limit,
            offset,
        });

        return genres.items;
    }

    async getGenre(genreId) {
        const genre = await this.get(`/${genreId}`);

        return genre;
    }
}
