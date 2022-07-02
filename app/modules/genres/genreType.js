import { gql } from 'apollo-server';

export const genreType = gql`
  type Query {
    genres(limit: Int, offset: Int): [Genre!]!
    genre(id: ID!): Genre!
  }

  type Mutation {
    createGenre(input: GenreInputCreate!): Genre!
    updateGenre(input: GenreInputUpdate!): Genre!
    deleteGenre(id: ID!): DeleteGenreResponse!
  }

  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input GenreInputCreate {
    name: String!
    description: String
    country: String
    year: Int
  }

  input GenreInputUpdate {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type DeleteGenreResponse {
    deletedCount: Int!
  }
`;
