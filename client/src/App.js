import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent';

import NavBar from './NavBar';
//import Home from './Home';
//import Budget from './Budget';
//import About from './About';
//import NoMatch from './NoMatch';

const Home = asyncComponent( () =>
  import('./Home').then( module => module.default )
)

const About = asyncComponent( () =>
  import('./About').then( module => module.default )
)

const Budget = asyncComponent( () =>
  import('./Budget').then( module => module.default )
)

const NoMatch = asyncComponent( () =>
  import('./NoMatch').then( module => module.default )
)

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/budget" component={Budget} />
      <Route exact path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;
