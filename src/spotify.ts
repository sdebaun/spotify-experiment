//@ts-ignore
import SpotifyWebApi from 'spotify-web-api-node' 

const redirectUri = 'http://localhost:3000/auth'
const clientId = '26622a388ed842deaafe5f8cf71a4352'
const scopes = ['user-read-private', 'user-read-email']
const state = 'what-is-state-for'

export const authRedirect = () => {
  const spotifyApi = new SpotifyWebApi({
    clientId,
    redirectUri
  })

  const authURL = spotifyApi.createAuthorizeURL(scopes, state)
  console.log('redirecting to spotify auth', authURL)
  window.location = authURL
}

export const fetchTopArtists = async () => {
  const spotifyApi = new SpotifyWebApi({
    clientId,
  })

}