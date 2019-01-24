import React from 'react';

import { useAsync } from '../useAsync'
import { authRedirect } from '../spotify'
import { useAuthToken } from '../useAuthToken'

const fetchStuff = async () => {
  return 'foo'
}

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

export const Home: React.SFC = () =>
  <div>
    <div>Home</div>
    <AuthOptions/>
  </div>
