
# Requirements

## Mandatory

[x] Front-end framework must be React
[x] Spotify User Authentication
[x] Spotify API for user's top artist data
[x] submission of GitHub link and deployment URL

## Optional
[x] deployment to a staging URL - (deployment provider/tools up to you)
[ ] Graph or Charting Library/Implementation for displaying the ranked artists

## Optional Rejected
[x] Some sort of data persistence isn't totally necessary but feel free to use local storage or go all out with a DB - if you have time/want. - *No frontend or backend persistence needed beyond localStorage for the oauth access token*.
[x] Use of GraphQL - *No backend needed for the main requirements*

## Additional Assumed
[x] Basic PWA framework using built-in CRA service worker.  Passes lighthouse audit for PWA.  No particular value to this beyond adding to home screen on mobile.
[x] Basic responsive layout using semantic-ui and css grid.
[] Card UI for Artists in both views

## Technical Debt
[] vertical menu in desktop layout feels hacky af.  ui.menu styles overriden in grid area styles.  do you want css bugs?  cuz thats how you get css bugs
[] spotify file is starting to outgrow its britches.  (butterfly: spotify.ts.  caption: is this a useSpotify library?)
[] probably want to replace useAsync with something publicly maintained, esp if we extract a useSpotify

## Technical Debt Blocked
[] hacky homegrown method for getting Implicit Grant from spotify.  A PR exists to add that feature to the official api.  homegrown method undoubtedly has edge case issues, not really tested.  when that PR is merged, update code to use api.

## Known Bugs
[] app doesn't refresh unless i go into chrome devtools / Application / Service Workers and manually 'Unregister' each service worker listed.  wtf