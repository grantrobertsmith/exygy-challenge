import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Browse from './Browse'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/browse" component={Browse} />
  </Switch>
);

export default App;
