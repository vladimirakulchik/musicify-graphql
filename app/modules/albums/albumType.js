import { gql } from 'apollo-server';

export const albumType = gql`
  type Query {
    albums(limit: Int, offset: Int): [Album!]!
    album(id: ID!): Album!
  }

  type Mutation {
    createAlbum(input: AlbumInputCreate!): Album!
    updateAlbum(input: AlbumInputUpdate!): Album!
    deleteAlbum(id: ID!): DeleteAlbumResponse!
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

  input AlbumInputCreate {
    name: String!
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    tracksIds: [String]
    genresIds: [String]
  }

  input AlbumInputUpdate {
    id: ID!
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    tracksIds: [String]
    genresIds: [String]
  }

  type DeleteAlbumResponse {
    deletedCount: Int!
  }
`;
