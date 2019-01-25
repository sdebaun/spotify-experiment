import React from 'react';

import { Link } from 'react-router-dom'

type SpotifyImage = {
  height: number,
  url: string,
}

export type SpotifyArtist = {
  external_urls: any
  genres: string[]
  href: string
  id: string
  name: string
  popularity: number
  images: SpotifyImage[]
}

export type GetMyTopArtistsResponse = {
  body: {
    items: SpotifyArtist[]
  }
}

export type GetArtistRelatedArtistsResponse = {
  body: {
    artists: SpotifyArtist[]
  }
}

export const Artist: React.SFC<{artist: SpotifyArtist}> = ({artist: {name, id, popularity, genres}}) =>
  <div>
    <Link to={`/like/${id}`}>
      <h4>{name}</h4>
    </Link>
    <div>{id}</div>
    <div>{genres.map((g,key) => <div {...{key}}>{g}</div>)}</div>
  </div>