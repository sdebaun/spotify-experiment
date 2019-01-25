import React from 'react';
import { RouteComponentProps } from 'react-router-dom'

import { AsyncSwitcher } from '../useAsync'
import {
  useGetArtistRelatedArtists,
  GetArtistRelatedArtistsResponse,
  useGetArtist,
  GetArtistResponse,
} from '../spotify'

import { Artist } from './Artist'

export const LikeArtistHeader: React.SFC<{artist_id: string}> = ({artist_id}) => {
  const { state } = useGetArtist(artist_id)
  return <AsyncSwitcher<GetArtistResponse> {...state}>
    {result => <h2>Artists like {result.body.name}</h2>}
  </AsyncSwitcher>
}

export const LikeArtist: React.SFC<RouteComponentProps<{artist_id: string}>> = ({match: {params: {artist_id}}}) => {
  const { state } = useGetArtistRelatedArtists(artist_id)

  return <div>
    <LikeArtistHeader {...{artist_id}}/>
    <AsyncSwitcher<GetArtistRelatedArtistsResponse> {...state}>
      {result => result.body.artists.map(artist => <Artist {...{key: artist.id, artist}}/>)}
    </AsyncSwitcher>
  </div>
}
