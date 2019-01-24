import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom'
import querystring from 'query-string'

import { useAuthToken } from './useAuthToken'

export const AuthCallback: React.SFC<RouteComponentProps> = ({location}) => {
  const { setAuthToken } = useAuthToken()
  const { code } = querystring.parse(location.search)
  useEffect(() => setAuthToken(code as string), [])

  return <Redirect to='/'/>
}