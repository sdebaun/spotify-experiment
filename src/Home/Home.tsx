import React from 'react';
import { Route } from 'react-router-dom'

import { TopArtists } from './TopArtists'
import { LikeArtist } from './LikeArtist'

import { useAuthResponse } from '../useAuthToken'

const SignInCTA: React.SFC = () =>
  <div>Sign in to see your top artists!</div>

const HomeRoutes: React.SFC = () =>
  <>
  <Route path='/' exact component={TopArtists}/>
  <Route path='/like/:artist_id' component={LikeArtist}/>
  </>

export const Home: React.SFC = () => {
  const { authResponse } = useAuthResponse()
  return authResponse ? <HomeRoutes/> : <SignInCTA/>
}
