import React, { useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom'
import querystring from 'query-string'

import { useAuthResponse } from './useAuthToken'

export const AuthCallback: React.SFC<RouteComponentProps> = ({location: { hash }}) => {
  const { setAuthResponse } = useAuthResponse()
  const response = JSON.stringify(querystring.parse(hash))
  useEffect(() => setAuthResponse(response), [])

  return <Redirect to='/'/>
}