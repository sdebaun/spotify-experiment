import React from 'react'
import { Link } from 'react-router-dom'

import { authRedirect } from './spotify'
import { useAuthResponse } from './useAuthToken'

const SignOut: React.SFC = () => {
  const { clearAuthResponse: clearAuthToken } = useAuthResponse()
  return <button onClick={() => { clearAuthToken(); window.location.href = '/' }}>sign out</button>
}

const SignIn: React.SFC = () =>
  <button onClick={authRedirect}>sign in with spotify</button>

const AuthOptions: React.SFC = () => {
  const { authResponse } = useAuthResponse()
  return authResponse ? <SignOut/> : <SignIn/>
}

export const Header: React.SFC = () =>
  <div>
    <Link to='/'>Your Top</Link>
    <Link to='/like/3QgSmABpItIdj908ek80n5'>Like Morphine</Link>
    <AuthOptions/>
  </div>
