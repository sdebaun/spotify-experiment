import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './Home'
import { AuthCallback } from './AuthCallback'

const App: React.SFC<{}> = () =>
  <Router>
    <div>
      <Route path='/' exact component={Home}/>
      <Route path='/auth' component={AuthCallback}/>
    </div>
  </Router>

export default App;
