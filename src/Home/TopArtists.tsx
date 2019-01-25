import React from 'react';

import { useGetMyTopArtists, GetMyTopArtistsResponse } from '../spotify'

import { Artist } from './Artist'
import { AsyncSwitcher } from '../useAsync';

export const TopArtists: React.SFC = () => {
  const { state } = useGetMyTopArtists()
  // console.log('state', state)

  return <div>
    <h2>Top Artists</h2>
    <AsyncSwitcher<GetMyTopArtistsResponse> {...state}>
      {result => result.body.items.map(artist => <Artist {...{key: artist.id, artist}}/>)}
    </AsyncSwitcher>
  </div>
}
