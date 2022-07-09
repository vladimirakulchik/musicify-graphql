# Musicify Graphql Service

This application provides you an ability to write GraphQL queries and mutations for Musicify App. 
It will send requests to the Musicify REST microservices and return result to you.

You can find repository with Musicify REST microservices https://github.com/rolling-scopes-school/node-graphql-service
Clone it run microservices on your computer. Follow the steps in the readme file.

These microservices exist:
- Albums
- Artists
- Bands
- Favourites
- Genres
- Tracks
- Users

## Installation
1. Clone this repository.
2. Create `.env` file from template `.env.example` file.
3. Run `npm install` command.
4. You can start application in development and production modes.  In development mode, it will monitor changes in the source code and restart the application.

To start app in development mode run:
```
npm run start:dev
```

To start app in production mode run:
```
npm run start
```

## How to use it
Open Apollo Server Sandbox at http://localhost:4000 (you can change port in the `.env` file.)
Click "Query your server" button.

After that you should be able to see all available queries and mutations at the left side.
Request field is in the center. And response at the right side.

There are some examples for queries and mutations below. You can find all available fields at the left side of the sandbox.

## Users service
### Create new user mutation
```
mutation createUser($input: UserInput) {
  register(input: $input) {
    id
    firstName
    secondName
    password
    email
  }
}

// input data
{
  "input": {
    "firstName": "User",
    "secondName": "Loginov",
    "password": "qwerty12345",
    "email": "userlog@example.com"
  }
}
```

### Login user
```
query login($email: String, $password: String) {
  jwt(email: $email, password: $password)
}

// data
{
  "email": "userlog@example.com",
  "password": "qwerty12345"
}
```
This query should return JWT token for this user.

You should add it to the Authorization header like this to run all other migrations.
```
Authorization: Bearer <YOUR_JWT_HERE>
```

### Get user information
```
query User($userId: ID!) {
  user(id: $userId) {
    id
    firstName
    secondName
    password
    email
  }
}

// data
{
  "userId": "62c9471c251cd71c1ca73b81"
}
```

## Genres service

### Get genres
```
query getGenres {
  genres {
    id
    name
    description
    country
    year
  }
}
```

**All collection queries support pagination**
```
query getGenres($limit: Int, $offset: Int) {
  genres(limit: $limit, offset: $offset) {
    id
    name
    description
    country
    year
  }
}

// data
{
  "limit": 100,
  "offset": 0
}
```
By default offset = 0, limit = 5.

### Get genre by id
```
query getGenre($genreId: ID!) {
  genre(id: $genreId) {
    id
    name
    description
    country
    year
  }
}

// data
{
  "genreId": "62c9556857270a4683cdc5ae"
}
```

### Create genre
```
mutation CreateGenre($input: GenreInputCreate!) {
  createGenre(input: $input) {
    id
    name
    description
    country
    year
  }
}

// data
{
  "input": {
    "name": "Test",
    "description": "dsc",
    "country": "Belarus",
    "year": 2022
  },
}
```

### Update genre
```
mutation UpdateGenre($input: GenreInputUpdate!) {
  updateGenre(input: $input) {
    id
    name
    description
    country
    year
  }
}

// data
{
  "input": {
    "id": "62c9556857270a4683cdc5ae",
    "name": "Latino",
    "year": 1980
  }
}
```

### Delete genre
```
mutation DeleteGenre($deleteGenreId: ID!) {
  deleteGenre(id: $deleteGenreId) {
    deletedCount
  }
}

// data
{
  "deleteGenreId": "62c9556857270a4683cdc5ae"
}
```
If you get 403 error for any mutation, please provide valid JWT token in correct format.

## Artists service
### Get artists
```
query getArtists {
  artists {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      id
      name
    }
    instruments
  }
}
```

### Get artist by id
```
query getArtist($artistId: ID!) {
  artist(id: $artistId) {
    id
    secondName
  firstName
    middleName
    birthDate
    birthPlace
    country
    bands {
      id
      name
      website
    }
    instruments
  }
}

// data
{
  "artistId": "62c495e8cf1947d7134c454e"
}
```

### Create artist
```
mutation CreateArtist($input: ArtistInputCreate!) {
  createArtist(input: $input) {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      id
      name
    }
    instruments
  }
}

// data
{
  "input": {
    "firstName": "Petr",
    "secondName": "Sidorov",
    "middleName": "Ivanovich",
    "birthDate": "05/22/1970",
    "birthPlace": "Minsk",
    "country": "Belarus",
    "instruments": [
        "bas"
    ]
  }
}
```

### Update artist
```
mutation UpdateArtist($input: ArtistInputUpdate!) {
  updateArtist(input: $input) {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      id
      name
      origin
      website
    }
    instruments
  }
}

// data
{
  "input": {
    "id": "62c96d2c4c8b79f16056f0ec",
    "bandsIds": [
        "62c96e0e6f36047be2abb46b"
    ]
  }
}
```

### Delete artist
```
mutation DeleteArtist($deleteArtistId: ID!) {
  deleteArtist(id: $deleteArtistId) {
    deletedCount
  }
}

// data
{
  "deleteArtistId": "62c96d2c4c8b79f16056f0ec"
}
```

## Bands service
### Get bands
```
query getBands {
  bands {
    id
    name
    origin
    members {
      id
      firstName
      secondName
      country
      instrument
      years
    }
    website
    genres {
      id
      name
    }
  }
}
```

### Get band by id
```
query getBand($bandId: ID!) {
  band(id: $bandId) {
    id
    name
    origin
    members {
      id
      firstName
      secondName
      middleName
      birthDate
      birthPlace
      country
      instrument
      years
    }
    website
    genres {
      id
      name
      description
      country
      year
    }
  }
}

// data
{
  "bandId": "62c96e0e6f36047be2abb46b"
}
```

### Create band
```
mutation CreateBand($input: BandInputCreate!) {
  createBand(input: $input) {
    id
    name
    origin
    members {
      id
      firstName
      secondName
    }
    website
    genres {
      id
      name
    }
  }
}

// data
{
  "input": {
    "name": "Chaif",
    "origin": "Retro star",
    "website": "http://chaif.ru",
    "members": [
        {
            "artist": "62c96d2c4c8b79f16056f0ec",
            "instrument": "guitar",
            "years": [
                "2022",
                "1985"
            ]
        }
    ],
    "genresIds": [
        "62beb87104739496605c2f03",
        "62beb89d04739496605c2f05"
    ]
  }
}
```

### Update band
```
mutation UpdateBand($input: BandInputUpdate!) {
  updateBand(input: $input) {
    id
    name
    origin
    members {
      id
      firstName
      secondName
    }
    website
    genres {
      id
      name
    }
  }
}

// data
{
  "input": {
    "id": "62c96e0e6f36047be2abb46b",
    "name": "Chaiff",
    "genresIds": [
      "62beb9fe04739496605c2f17"
    ]
  }
}
```

### Delete band
```
mutation DeleteBand($deleteBandId: ID!) {
  deleteBand(id: $deleteBandId) {
    deletedCount
  }
}

// data
{
  "deleteBandId": "62c96e0e6f36047be2abb46b"
}
```

## Tracks service
### Get tracks
```
query getTracks {
  tracks {
    id
    title
    album {
      name
    }
    artists {
      firstName
      secondName
    }
    bands {
      name
    }
    duration
    released
    genres {
      name
    }
  }
}
```

### Get track by id
```
query getTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    album {
      name
      id
    }
    artists {
      secondName
      firstName
    }
    bands {
      name
      website
    }
    duration
    released
    genres {
      name
    }
  }
}

// data
{
  "trackId": "62c5e10fda8f0f21609e5280"
}
```

### Create track
```
mutation CreateTrack($input: TrackInputCreate!) {
  createTrack(input: $input) {
    id
    title
    album {
      name
    }
    artists {
      firstName
      secondName
    }
    bands {
      name
    }
    duration
    released
    genres {
      name
    }
  }
}

// data
{
  "input": {
    "title": "Good day",
    "artistsIds": [
      "62c96d2c4c8b79f16056f0ec"
    ],
    "duration": 150,
    "released": 2021,
    "genresIds": [
      "62beb92304739496605c2f0d",
      "62beb87104739496605c2f03"
    ]
  }
}
```

### Update track
```
mutation UpdateTrack($input: TrackInputUpdate!) {
  updateTrack(input: $input) {
    id
    title
    album {
      name
      id
    }
    artists {
      id
      firstName
    }
    bands {
      id
      name
    }
    duration
    released
    genres {
      id
      name
    }
  }
}

// data
{
  "input": {
    "id": "62c987d8675a503c33f7f74a",
    "artistsIds": [],
    "bandsIds": [
      "62c96e0e6f36047be2abb46b"
    ],
    "albumId": "62c98d9503ddb4c53485c8cc"
  }
}
```

### Delete track
```
mutation DeleteTrack($deleteTrackId: ID!) {
  deleteTrack(id: $deleteTrackId) {
    deletedCount
  }
}

// data
{
  "deleteTrackId": "62c987d8675a503c33f7f74a"
}
```

## Albums service
### Get albums
```
query getAlbums {
  albums {
    id
    name
    released
    artists {
      firstName
      secondName
    }
    bands {
      name
    }
    tracks {
      title
    }
    genres {
      name
    }
    image
  }
}
```

### Get album by id
```
query Album($albumId: ID!) {
  album(id: $albumId) {
    id
    name
    released
    artists {
      secondName
    }
    bands {
      name
    }
    tracks {
      title
    }
    genres {
      name
    }
  }
}

// data
{
  "albumId": "62c98d9503ddb4c53485c8cc"
}
```

### Create album
```
mutation CreateAlbum($input: AlbumInputCreate!) {
  createAlbum(input: $input) {
    id
    name
    released
    artists {
      firstName
      secondName
      id
    }
    bands {
      id
      name
    }
    tracks {
      id
      title
    }
    genres {
      id
      name
    }
    image
  }
}

// data
{
  "input": {
    "name": "The best hits",
    "released": 2015,
    "bandsIds": [
      "62c96e0e6f36047be2abb46b"
    ],
    "tracksIds": [
      "62c987d8675a503c33f7f74a"
    ],
    "genresIds": [
      "62beb92304739496605c2f0d",
      "62beb87104739496605c2f03"
    ]
  }
}
```

### Update album
```
mutation UpdateAlbum($input: AlbumInputUpdate!) {
  updateAlbum(input: $input) {
    id
    name
    released
    artists {
      firstName
    }
    bands {
      name
    }
    tracks {
      title
    }
    genres {
      name
    }
    image
  }
}

// data
{
  "input": {
    "id": "62c98d9503ddb4c53485c8cc",
    "name": "The best hits 2015",
    "released": 2016
  }
}
```

### Delete album
```
mutation DeleteAlbum($deleteAlbumId: ID!) {
  deleteAlbum(id: $deleteAlbumId) {
    deletedCount
  }
}

// data
{
  "deleteAlbumId": "62c98d9503ddb4c53485c8cc"
}
```

## Favourites service
### Add track to Favourites
```
mutation AddTrackToFavourites($addTrackToFavouritesId: ID!) {
  addTrackToFavourites(id: $addTrackToFavouritesId) {
    id
    userId
    bands {
      name
    }
    genres {
      name
    }
    artists {
      firstName
      secondName
    }
    tracks {
      title
    }
  }
}

// data
{
  "addTrackToFavouritesId": "62c987d8675a503c33f7f74a"
}
```

### Add band to Favourites
```
mutation AddBandToFavourites($addBandToFavouritesId: ID!) {
  addBandToFavourites(id: $addBandToFavouritesId) {
    id
    userId
    bands {
      name
    }
    genres {
      name
    }
    artists {
      firstName
      secondName
    }
    tracks {
      title
    }
  }
}

// data
{
  "addBandToFavouritesId": "62c96e0e6f36047be2abb46b"
}
```

### Add artist to Favourites
```
mutation AddArtistToFavourites($addArtistToFavouritesId: ID!) {
  addArtistToFavourites(id: $addArtistToFavouritesId) {
    id
    userId
    bands {
      name
    }
    genres {
      name
    }
    artists {
      firstName
      secondName
    }
    tracks {
      title
    }
  }
}

// data
{
  "addArtistToFavouritesId": "62c96d2c4c8b79f16056f0ec"
}
```

### Add genre to Favourites
```
mutation AddGenreToFavourites($addGenreToFavouritesId: ID!) {
  addGenreToFavourites(id: $addGenreToFavouritesId) {
    id
    userId
    bands {
      name
    }
    genres {
      name
    }
    artists {
      firstName
      secondName
    }
    tracks {
      title
    }
  }
}

// data
{
  "addGenreToFavouritesId": "62beb87104739496605c2f03"
}
```

### Get user favourites
To run this query use should provide JWT token in Authorization header.

```
query Favourites {
  favourites {
    id
    userId
    bands {
      name
    }
    genres {
      name
    }
    artists {
      firstName
      secondName
    }
    tracks {
      title
    }
  }
}
```
