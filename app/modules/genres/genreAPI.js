import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3001/v1/genres/';
    }

    async getGenres() {
        const genres = await this.get('', {
            offset: 0 // get params
        });

        return genres.items;
    }

    async getGenre(genreId) {
        const genre = await this.get(`${genreId}`);

        return genre;
    }
}
