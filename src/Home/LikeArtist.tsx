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
import { CardLayout } from './TopArtists'
import { GenreLabels } from './GenreLabels'

import styled from 'styled-components'

// import { Label } from 'semantic-ui-react'

const StyledHeader = styled.div`
  padding-bottom: 0.5em;
`

const StyledTitle = styled.h2`
  padding-bottom: 0.25em;
  margin-bottom: 0;
`

export const LikeArtistHeader: React.SFC<{artist_id: string}> = ({artist_id}) => {
  const { state } = useGetArtist(artist_id)
  console.log(state)
  return <AsyncSwitcher<GetArtistResponse> {...state}>
    {({body: { name, genres }}) =>
      <StyledHeader>
        <StyledTitle>Artists like {name}</StyledTitle>
        <GenreLabels {...{genres, limit:99}}/>
      </StyledHeader>
    }
  </AsyncSwitcher>
}

export const LikeArtist: React.SFC<RouteComponentProps<{artist_id: string}>> = ({match: {params: {artist_id}}}) => {
  const { state } = useGetArtistRelatedArtists(artist_id)

  return <div>
    <LikeArtistHeader {...{artist_id}}/>
    <AsyncSwitcher<GetArtistRelatedArtistsResponse> {...state}>
      {result => 
        <CardLayout>{result.body.artists.map(artist => <Artist {...{key: artist.id, artist}}/>)}</CardLayout>
      }
    </AsyncSwitcher>
  </div>
}
