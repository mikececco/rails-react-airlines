import React, { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Airlines from '../components/Airlines/Airlines';
import Airline from '../components/Airline/Airline';

const App = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {//make request and fetch all airlines
    //Get all airlines from API
    //update airlines in our state
  })

  return (
    <Switch>
      <Route exact path="/" render={() => <Airlines />} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  );
};

export default App;
