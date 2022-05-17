import React from 'react'

const WeatherBox = ({weather}) => {
    // console.log(weather)
    //Weather's initial Value is Null

  return (
    <div className='weatherBox'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}F</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox