import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

import { authRedirect } from './spotify'
import { useAuthResponse } from './useAuthToken'

const SignOut: React.SFC = () => {
  const { clearAuthResponse } = useAuthResponse()
  return <>
    <div>username@email.com</div>
    <Button inverted basic compact size='small' onClick={() => { clearAuthResponse(); window.location.href = '/' }}>sign out</Button>
  </>
}

const SignIn: React.SFC = () =>
  <Button inverted primary onClick={authRedirect}>sign in with spotify</Button>

const AuthOptions: React.SFC = () => {
  const { authResponse } = useAuthResponse()
  return authResponse ? <SignOut/> : <SignIn/>
}

const HeaderBar = styled.div`
  display: flex;
  padding: 0.5em;
  background-color: #333;
  align-items: center;
  justify-content: flex-end;
  color: white;
  &&& > * {
    margin-left: 0.5em;
  }
`

export const Header: React.SFC = () =>
  <HeaderBar>
    <AuthOptions/>
  </HeaderBar>
