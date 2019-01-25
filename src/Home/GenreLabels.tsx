import React from 'react';

import { Link } from 'react-router-dom'
import { SpotifyArtist } from '../spotify'
import { Card, Label } from 'semantic-ui-react'
import styled, { StyledFunction } from 'styled-components'

const SpacedLabel = styled(Label)`
&&&& {
  margin-bottom: 0.5em;
}
`

export const GenreLabels: React.SFC<{genres: string[], limit?: number}> = ({genres, limit = 6}) =>
  <>
    {genres.slice(0,limit).map((g,key) => <SpacedLabel size='small' {...{key}}>{g}</SpacedLabel>)}
  </>
