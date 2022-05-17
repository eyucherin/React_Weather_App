import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,handleCityChange}) => {
  console.log()
  return (
    <div className = "addMargin">
        <Button variant="primary"  onClick={() => handleCityChange("current")} >Current Location</Button>{' '}
        {cities.map((city) => (
          <Button className = "addMargin" onClick={() => setCity(city)}>  
            {city}
          </Button>
        ))}
    </div>
  )
}

export default WeatherButton