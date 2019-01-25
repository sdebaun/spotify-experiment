import React from 'react';

import { useAsync } from '../useAsync'
import { useSpotify } from '../spotify'
import { GetArtistRelatedArtistsResponse, SpotifyArtist } from './TopArtists'
import { Artist } from './Artist'
import { RouteComponentProps } from 'react-router-dom'

export const LikeArtistHeader: React.SFC<{artist_id: string}> = ({artist_id}) => {
  const api = useSpotify()
  const { state, setState } = useAsync<any>(api.getArtist.bind(api), artist_id)
  if (!state.isComplete) return <div>Loading...</div>
  return <h2>Artists like {state.result.body.name}</h2>
}


export const LikeArtist: React.SFC<RouteComponentProps<{artist_id: string}>> = ({match: {params: {artist_id}}}) => {
  console.log('artist_id', artist_id)
  const api = useSpotify()
  const { state, setState } = useAsync<GetArtistRelatedArtistsResponse>(api.getArtistRelatedArtists.bind(api), artist_id)

  if (!state.isComplete) return <div>Loading...</div>
  if (state.isErrored) return <div>Error!</div>
  return <div>
    <LikeArtistHeader {...{artist_id}}/>
    { state.result && state.result.body.artists.map((artist: SpotifyArtist) => <Artist {...{key: artist.id, artist}}/>)}
  </div>
}