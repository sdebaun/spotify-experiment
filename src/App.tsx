import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './Header'
import { Nav } from './Nav'
import { AuthCallback } from './AuthCallback'
import { Home } from './Home'

import { Layout, AppBarStyles, NavStyles, ContentStyles } from './Layout'

const StyledHeader = styled(Header)`${AppBarStyles}`
const StyledContent = styled.div`${ContentStyles}`
const StyledNav = styled(Nav)`${NavStyles}`

const App: React.SFC<{}> = () =>
  <Router>
    <Layout>
      <StyledHeader/>
      <StyledNav/>
      <StyledContent>
        <Switch>
          <Route path='/auth' component={AuthCallback}/>
          <Route path='/' component={Home}/>
        </Switch>
      </StyledContent>
    </Layout>
  </Router>

export default App;
