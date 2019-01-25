import React from 'react';

import { Link } from 'react-router-dom'
import { SpotifyArtist } from '../spotify'
import { Card, Label } from 'semantic-ui-react'
import styled, { StyledFunction } from 'styled-components'

import { GenreLabels } from './GenreLabels'

// const sty: StyledFunction<{backgroundImage: string} & React.HTMLProps<HTMLInputElement>> = styled.div
type StyledCardProps = {
  backgroundImage: string
}

// const StyledCard = styled(({backgroundImage, ...rest}) => <Card {...rest}/>)`
//   &&&& {
//     height: 200px;
//   }
//   &&&& .content:after {
//     content: none;
//   }
//   &&& .content {
//     background-image: url('${(props: StyledCardProps) => props.backgroundImage}');
//     background-size: cover;
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 200px;
//   }
//   &&&& .header {
//     background: rgba(0,0,0,0.5);
//     padding: 1em;
//     margin-top: 0;
//     // a {
//     //   color: white;
//     // }
//   }
//   &&&& .meta, &&&& .description {
//     padding: 0.5em;

//     .label {
//       margin-bottom: 0.5em;
//     }
//   }
//   &&&& .description {
//     background: rgba(0,0,0,0.5);
//   }
//   &&&& a {
//     color: white
//   }
// `

// export const Artist: React.SFC<{artist: SpotifyArtist}> = ({artist: {name, id, popularity, genres, images}}) =>
//   <StyledCard backgroundImage={images[0].url}>
//     <Card.Content>
//       <Card.Header>
//         <Link to={`/like/${id}`}>
//         {name}
//         </Link>
//       </Card.Header>
//       <Card.Meta>
//         {genres.map((g,key) => <Label size='small' {...{key}}>{g}</Label>)}
//       </Card.Meta>
//       <Card.Description>
//         <a href={`https://open.spotify.com/artist/${id}`} target='new'>on spotify</a>
//       </Card.Description>
//     </Card.Content>
//   </StyledCard>

const StyledCard = styled(({backgroundImage, ...rest}) => <div {...rest}/>)`
    background-image: url('${(props: StyledCardProps) => props.backgroundImage}');
    background-size: cover;
    padding: 0;
    display: grid;
    // flex-direction: column;
    // justify-content: space-between;
    grid-template-rows: auto 1fr auto;
`

const StyledHeader = styled.div`
    background: rgba(0,0,0,0.5);
    padding: 1em;
    * { color: white }
`

const StyledContent = styled.div`
padding: 0.5em;
}
`

const StyledExtra = styled.div`
background: rgba(0,0,0,0.5);
padding: 0.5em;
* {
  color: white;
}
`

export const Artist: React.SFC<{artist: SpotifyArtist}> = ({artist: {name, id, popularity, genres, images}}) =>
  <StyledCard backgroundImage={images[0] && images[0].url}>
      <StyledHeader>
        <Link to={`/like/${id}`}>
        {name}
        </Link>
      </StyledHeader>
      <StyledContent>
        <GenreLabels {...{genres}}/>
      </StyledContent>
      <StyledExtra>
        <a href={`https://open.spotify.com/artist/${id}`} target='new'>on spotify</a>
      </StyledExtra>
  </StyledCard>