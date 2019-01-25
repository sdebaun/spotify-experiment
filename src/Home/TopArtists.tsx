import React from 'react';
import { Grid } from 'semantic-ui-react'
import { useGetMyTopArtists, GetMyTopArtistsResponse } from '../spotify'

import { Artist } from './Artist'
import { AsyncSwitcher } from '../useAsync';
import styled from 'styled-components'
import media from '../media';

export const CardLayout = styled.div`
display: grid;
// width: 100vw;
// height: 100vh;
height: auto;
min-height: 100vh;
// grid-gap: 1em;
${media.small} {
  grid-template-columns: auto;
};
${media.large} {
  grid-template-columns: 33% 33% 33%;
}
&&& .card {
  margin: 0;
  margin-bottom: 1em;
}
`

export const TopArtists: React.SFC = () => {
  const { state } = useGetMyTopArtists()
  // console.log('state', state)

  return <div>
    <h2>Top Artists</h2>
    <AsyncSwitcher<GetMyTopArtistsResponse> {...state}>
      {result => 
        <CardLayout>{result.body.items.map(artist => <Artist {...{key: artist.id, artist}}/>)}</CardLayout>
      }
    </AsyncSwitcher>
  </div>
}
