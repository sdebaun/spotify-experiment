import React from 'react';

import { useAsync } from '../useAsync'
import { authRedirect, useSpotify } from '../spotify'
import { useAuthResponse } from '../useAuthToken'

type SpotifyImage = {
  height: number,
  url: string,
}

type SpotifyArtist = {
  external_urls: any
  genres: string[]
  href: string
  id: string
  name: string
  popularity: number
  images: SpotifyImage[]
}

type GetMyTopArtistsResponse = {
  body: {
    items: SpotifyArtist[]
  }
}

type GetArtistRelatedArtistsResponse = {
  body: {
    artists: SpotifyArtist[]
  }
}

const Artist: React.SFC<{artist: SpotifyArtist}> = ({artist: {name, id, popularity, genres}}) =>
  <div>
    <h4>{name}</h4>
    <div>{id}</div>
    <div>{genres.map((g,key) => <div {...{key}}>{g}</div>)}</div>
  </div>

export const TopArtists: React.SFC = () => {
  const api = useSpotify()
  // const { state, setState } = useAsync<GetMyTopArtistsResponse>(api.getMyTopArtists.bind(api))
  const { state, setState } = useAsync<GetArtistRelatedArtistsResponse>(api.getArtistRelatedArtists.bind(api), '3QgSmABpItIdj908ek80n5')
  console.log('state', state)

  if (!state.isComplete) return <div>Loading...</div>
  if (state.isErrored) return <div>Error!</div>
  return <div>
    <h2>
    Top Artists
    </h2>
    {/* { state.result && state.result.body.items.map((artist: SpotifyArtist) => <Artist {...{key: artist.id, artist}}/>)} */}
    { state.result && state.result.body.artists.map((artist: SpotifyArtist) => <Artist {...{key: artist.id, artist}}/>)}
  </div>
}
