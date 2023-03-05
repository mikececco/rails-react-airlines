import React, { useState, useEffect} from 'react';
import axios from "axios";

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {//make request and fetch all airlines
    //Get all airlines from API
    //update airlines in our state
    axios.get('/api/v1/airlines.json')
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )
  }, [airlines.length])

  return (
    <div>
      <h1>This is Airlines#index view for our app</h1>
    </div>
  )
}

export default Airlines
