import { gql } from 'apollo-server';

export const userType = gql`
  type Query {
    user(id: ID!): User!
    jwt(email: String, password: String): String!
  }

  type Mutation {
    register(input: UserInput): User!
  }

  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  input UserInput {
    firstName: String!
    secondName: String!
    password: String!
    email: String!
  }
`;
