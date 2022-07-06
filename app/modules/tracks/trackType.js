import { gql } from 'apollo-server';

export const trackType = gql`
  type Query {
    tracks(limit: Int, offset: Int): [Track!]!
    track(id: ID!): Track!
  }

  type Track {
    id: ID!
    title: String!
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
`;

// !!! ADD to track !!!
// album: Album
