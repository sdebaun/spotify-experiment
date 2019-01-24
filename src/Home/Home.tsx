import React from 'react';

import { authRedirect } from '../spotify'
import { useAuthToken } from '../useAuthToken'

import { TopArtists } from './TopArtists'

const SignOut: React.SFC = () => {
  const { clearAuthToken } = useAuthToken()
  return <button onClick={clearAuthToken}>sign out</button>
}

const SignIn: React.SFC = () =>
  <button onClick={authRedirect}>sign in with spotify</button>

const AuthOptions: React.SFC = () => {
  const { authToken } = useAuthToken()
  return authToken ? <SignOut/> : <SignIn/>
}

const SignInCTA: React.SFC = () =>
  <div>Sign in to see your top artists.</div>

export const Home: React.SFC = () => {
  const { authToken } = useAuthToken()

  return <div>
    <div>Home</div>
    <AuthOptions/>
    { authToken ? <TopArtists/> : <SignInCTA/> }
  </div>
}
