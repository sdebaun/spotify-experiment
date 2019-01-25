import React from 'react'

import styled from 'styled-components'
import colors from './colors'
import media from './media'

export const Layout = styled.div`
  display: grid;
  // width: 100vw;
  // height: 100vh;
  height: auto;
  min-height: 100vh;
  ${media.small} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "appBar"
      "nav"
      "content"
      ;
  };
  ${media.large} {
    min-height: 100vh;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "appBar content"
      "nav content"
      ;
  }
`

export const AppBarStyles = `
  grid-area: appBar;
  background-color: ${colors.bar.bg};
  color: ${colors.bar.pri};
  & > * {
    color: ${colors.bar.pri};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75em;
  & > * {
    padding: 0.75em 1.25em;
    flex: 0;
    color: ${colors.bot.pri};
    font-weight: bold;
    text-decoration: none;
  }

`

export const NavStyles = `
  grid-area: nav;
  padding: 0.5em;
  background-color: ${colors.bot.bg};
  color: ${colors.bot.pri};
  & > * {
    color: ${colors.bot.pri};
  }
  &&& > .ui.menu {
    background-color: transparent;

    ${media.large} {
      flex-direction: column;

      .item {
        width: 100%;
      }
    }
  }
`

export const ContentStyles = `
  grid-area: content;
  background-color: ${colors.low.bg};
  padding: 0.5em;
  color: ${colors.low.pri};
`
