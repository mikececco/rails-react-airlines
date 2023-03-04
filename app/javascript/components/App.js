import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Airlines from '../components/Airlines/Airlines'
import Airline from '../components/Airline/Airline'


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component= {Airlines}/>
      <Route exact path="/airlines/:slug" component= {Airline}/>
    </Switch>
  ) // Switch renders the first child <Route> or <Redirect> that matches the location.
}


export default App
