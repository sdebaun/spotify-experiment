import { useState } from 'react'
//@ts-ignore
import SpotifyWebApi from 'spotify-web-api-node' 
import { useAsync } from './useAsync';
import querystring from 'query-string'
import { useAuthResponse } from './useAuthToken';
const redirectUri = 'http://localhost:3000/auth'
const clientId = '26622a388ed842deaafe5f8cf71a4352'
const scopes = ['user-read-private', 'user-read-email', 'user-top-read']
const state = 'what-is-state-for'

// ok, so there is a PR open for the spotify api that adds Implicit grant flow
// https://github.com/thelinmichael/spotify-web-api-node/pull/261/commits/7433993be55e58d67ad37a1236f3a05ad6734db2
// this is entirely client side
// we can hack this in by manually generating the auth redirect url
// and then set the access token on the spotify api object in useSpotify 

//s://accounts.spotify.com/authorize?client_id=26622a388ed842deaafe5f8cf71a4352&response_type=code&redirect_uri=http://localhost:3000/auth&scope=user-read-private%20user-read-email&state=what-is-state-for 
const spotifyApi = new SpotifyWebApi({
  clientId,
  redirectUri
})

const queryParams = {
  client_id: clientId,
  response_type: 'token',
  redirect_uri: redirectUri,
  scope: scopes.join(' '),
  state
}

const createImplicitGrantURL = (scopes: string[], state: string) =>
  `https://accounts.spotify.com/authorize?${querystring.stringify(queryParams)}`

export const authRedirect = () => {
  // const authURL = spotifyApi.createAuthorizeURL(scopes, state)
  const authURL = createImplicitGrantURL(scopes, state)
  // console.log(authURL)
  window.location.href = authURL
}

export const fetchTopArtists = async () => {
  const spotifyApi = new SpotifyWebApi({
    clientId,
  })

}

export const useSpotify = () => {
  const { authResponse } = useAuthResponse()
  const authProps = JSON.parse(authResponse)
  spotifyApi.setAccessToken(authProps.access_token)

  return spotifyApi
}
