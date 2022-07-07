import { gql } from 'apollo-server';

export const trackType = gql`
  type Query {
    tracks(limit: Int, offset: Int): [Track!]!
    track(id: ID!): Track!
  }

  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
`;
