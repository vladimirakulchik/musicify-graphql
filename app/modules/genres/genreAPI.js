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

    async getGenresByIds(genresIds) {
        const promises = genresIds.map((id) => {
            return this.getGenre(id);
        });
        const genres = await Promise.all(promises);

        return genres;
    }

    async createGenre(input, authToken) {
        const genre = await this.post(
            '/',
            this.getGenreBody(input),
            this.getAuthHeader(authToken)
        );

        return genre;
    }

    async updateGenre(input, authToken) {
        const genreId = input.id;
        const genre = await this.put(
            `/${genreId}`,
            this.getGenreBody(input),
            this.getAuthHeader(authToken)
        );

        return genre;
    }

    async deleteGenre(genreId, authToken) {
        const result = await this.delete(
            `/${genreId}`,
            {},
            this.getAuthHeader(authToken)
        );

        return result;
    }

    getGenreBody(input) {
        return {
            name: input.name,
            description: input.description,
            country: input.country,
            year: input.year,
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
