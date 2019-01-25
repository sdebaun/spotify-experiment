import React from 'react';
import { Grid } from 'semantic-ui-react'
import { useGetMyTopArtists, GetMyTopArtistsResponse } from '../spotify'

import { Artist } from './Artist'
import { AsyncSwitcher } from '../useAsync';
import styled from 'styled-components'
import media from '../media';

export const CardLayout = styled.div`
  display: grid;
  height: auto;
  min-height: 100vh;
  grid-gap: 1em;
  width: 100%;
  ${media.small} {
    grid-template-columns: auto;
    grid-auto-rows: 200px;
  };
  ${media.large} {
    grid-template-columns: 33% 33% 33%;
    grid-auto-rows: 200px;
  }
`

export const TopArtists: React.SFC = () => {
  const { state } = useGetMyTopArtists()
  // console.log('state', state)

  return <div>
    <AsyncSwitcher<GetMyTopArtistsResponse> {...state}>
      {result => 
        <CardLayout>{result.body.items.map(artist => <Artist {...{key: artist.id, artist}}/>)}</CardLayout>
      }
    </AsyncSwitcher>
  </div>
}
