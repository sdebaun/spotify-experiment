import React from 'react';

import { Link } from 'react-router-dom'
import { SpotifyArtist } from '../spotify'

export const Artist: React.SFC<{artist: SpotifyArtist}> = ({artist: {name, id, popularity, genres}}) =>
  <div>
    <Link to={`/like/${id}`}>
      <h4>{name}</h4>
    </Link>
    <div>{id}</div>
    <div>{genres.map((g,key) => <div {...{key}}>{g}</div>)}</div>
  </div>