import React, { useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom'
import querystring from 'query-string'

import { useAuthToken } from './useAuthToken'

export const AuthCallback: React.SFC<RouteComponentProps> = ({location}) => {
  const { setAuthToken } = useAuthToken()
  // const { code } = querystring.parse(location.search)
  const response = JSON.stringify(querystring.parse(location.hash))
  useEffect(() => setAuthToken(response), [])

  return <Redirect to='/'/>
  return <></>
}