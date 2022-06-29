import { RESTDataSource } from 'apollo-datasource-rest';

export class GenresAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3001/v1/genres/';
    }

    async genres() {
        const genres = await this.get('', {
            offset: 0 // get params
        });

        return genres.items.map(({ _id, year, ...genre }) => {
            return {
                'id': _id,
                'year': +year,
                ...genre
            };
        });
    }
}
