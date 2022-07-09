import { gql } from 'apollo-server';

export const bandType = gql`
  type Query {
    bands(limit: Int, offset: Int): [Band!]!
    band(id: ID!): Band!
  }

  type Mutation {
    createBand(input: BandInputCreate!): Band!
    updateBand(input: BandInputUpdate!): Band!
    deleteBand(id: ID!): DeleteBandResponse!
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  input BandInputCreate {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
  }

  input BandInputUpdate {
    id: ID!
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
  }

  type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    instrument: String
    years: [String]
  }

  input MemberInput {
    artist: ID!
    instrument: String
    years: [String]
  }

  type DeleteBandResponse {
    deletedCount: Int!
  }
`;
