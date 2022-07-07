import { gql } from 'apollo-server';

export const trackType = gql`
  type Query {
    tracks(limit: Int, offset: Int): [Track!]!
    track(id: ID!): Track!
  }

  type Mutation {
    createTrack(input: TrackInputCreate!): Track!
    updateTrack(input: TrackInputUpdate!): Track!
    deleteTrack(id: ID!): DeleteTrackResponse!
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

  input TrackInputCreate {
    title: String!
    albumId: String
    artistsIds: [String]
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  input TrackInputUpdate {
    id: ID!
    title: String
    albumId: String
    artistsIds: [String]
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  type DeleteTrackResponse {
    deletedCount: Int!
  }
`;
