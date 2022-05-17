import './App.css';
import { useState, useEffect } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";


function App() { 
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [weather,setWeather] = useState(null)
  const [city,setCity] = useState(null)
  const [loading,setLoading] = useState(false)
  const cities = ["Seoul","New York","Paris","London"]

  const getWeatherByCurrentLocation = async(lat,lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  const getWeatherByCity = async(city) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    console.log("Data",data)
    setWeather(data)
    setLoading(false)
  }

  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
    })
  }

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  useEffect(() =>{
    if(city == null){
      getCurrentLocation()
    }else{
      getWeatherByCity(city)
    }
  },[city])
  
  return (
    <div className='container'>
      {loading ? <ClipLoader color="#FFFFF " loading={loading} size={80} />: <WeatherBox weather = {weather}/>}
      <WeatherButton cities = {cities} setCity = {setCity} handleCityChange = {handleCityChange}/>
    </div>
  );
}

export default App;
