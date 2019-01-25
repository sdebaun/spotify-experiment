import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header } from './Header'
import { AuthCallback } from './AuthCallback'
import { Home } from './Home'

const App: React.SFC<{}> = () =>
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route path='/auth' component={AuthCallback}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  </Router>

export default App;
