import { gql } from 'apollo-server';

export const albumType = gql`
  type Query {
    albums(limit: Int, offset: Int): [Album!]!
    album(id: ID!): Album!
  }

  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
`;
