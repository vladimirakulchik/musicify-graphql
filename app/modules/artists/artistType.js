import { gql } from 'apollo-server';

export const artistType = gql`
  type Query {
    artists(limit: Int, offset: Int): [Artist!]!
    artist(id: ID!): Artist!
  }

  type Mutation {
    createArtist(input: ArtistInputCreate!): Artist!
    updateArtist(input: ArtistInputUpdate!): Artist!
    deleteArtist(id: ID!): DeleteArtistResponse!
  }

  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  input ArtistInputCreate {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }

  input ArtistInputUpdate {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }

  type DeleteArtistResponse {
    deletedCount: Int!
  }
`;
