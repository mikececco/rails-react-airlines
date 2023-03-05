import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Airlines from '../components/Airlines/Airlines'
import Airline from '../components/Airline/Airline'


const App = () => {
  return (
    <Switch>
      <Route path="/" component= {Airlines}/>
      <Route path="/airlines/:slug" component= {Airline}/>
    </Switch>
  ) // Switch renders the first child <Route> or <Redirect> that matches the location.
}


export default App
