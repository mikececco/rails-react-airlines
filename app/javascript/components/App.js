import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Airlines from '../components/Airlines/Airlines';
import Airline from '../components/Airline/Airline';

const App = () => {
  console.log('App render');
  return (
    <Switch>
      <Route exact path="/" render={() => <Airlines />} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  );
};

export default App;
