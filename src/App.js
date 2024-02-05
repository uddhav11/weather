// this project only gives forecase after 3 hours gap time.


import './App.css';
import Search from './components/search'
import CurrentWeather from './components/current_weather'
import {weatherApi} from './components/api'
import React, {useState} from 'react';
import Forecast from './components/forecast/forecast'





function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [foreCast, setForeCast] = useState(null)


  const handleSearchChange=(searchData) =>{
    const [lat, lon]= searchData.value.split(" ")
    // include your api key in the below const which you get from the api provider.
    const weatherApiKeys= process.env.REACT_APP_API_KEY;

    const currentWeather= fetch(
      `${weatherApi}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKeys}&units=metric`    )

    const foreCast= fetch(
      `${weatherApi}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKeys}&units=metric&cnt=7`
    )

    Promise.all([currentWeather, foreCast])
    .then(async (response) => {
      const weatherResponse= await response[0].json()
      const foreCastResponse= await response[1].json()

      setCurrentWeather({city: searchData.label, ...weatherResponse})
      setForeCast({city: searchData.label, ...foreCastResponse})
    })
    .catch((err) => console.log(err))
  }
  console.log(currentWeather)
  console.log(foreCast)

  return (
    <>
    <div className="container">
      <h1  style={{textAlign: 'center', color: '#bd2121'}}>Hello, Welcome to my Weather Application where you can see weather condition</h1>
      <Search onSearchChange={handleSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>} 
      {foreCast && <Forecast data={foreCast} />}
    </div>
      
    </>


  );
}

export default App;
