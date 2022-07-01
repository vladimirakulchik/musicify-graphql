import { gql } from 'apollo-server';

export const bandType = gql`
  type Query {
    bands(limit: Int, offset: Int): [Band!]!
    band(id: ID!): Band!
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    artist: String
    instrument: String
    years: [String]
  }
`;
