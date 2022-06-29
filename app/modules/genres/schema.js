import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genres: [Genre]
  }
`;
