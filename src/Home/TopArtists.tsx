import React from 'react';

import { useAsync } from '../useAsync'
import { authRedirect, useSpotify } from '../spotify'
import { useAuthResponse } from '../useAuthToken'
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

// export const Artist: React.SFC<{artist: SpotifyArtist}> = ({artist: {name, id, popularity, genres}}) =>
//   <div>
//     <Link to={`/like/${id}`}>
//       <h4>{name}</h4>
//     </Link>
//     <div>{id}</div>
//     <div>{genres.map((g,key) => <div {...{key}}>{g}</div>)}</div>
//   </div>

import { Artist } from './Artist'

export const TopArtists: React.SFC = () => {
  const api = useSpotify()
  const { state, setState } = useAsync<GetMyTopArtistsResponse>(api.getMyTopArtists.bind(api))
  console.log('state', state)

  if (!state.isComplete) return <div>Loading...</div>
  if (state.isErrored) return <div>Error!</div>
  return <div>
    <h2>
    Top Artists
    </h2>
    { state.result && state.result.body.items.map((artist: SpotifyArtist) => <Artist {...{key: artist.id, artist}}/>)}
  </div>
}
