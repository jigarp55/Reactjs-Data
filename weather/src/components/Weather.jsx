import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { weatherRequest } from '../slice/weatherslice';
import DisplayWeatherData from './DisplayWeatherData';
export default function Weather() {

    const da = useSelector(y => y.weather);
    const [cityName,setCityName]= useState('');

    const dis = useDispatch();

    const loadWeather = ()=>{
      dis(weatherRequest(cityName))
    }

   
  return (
    <div>

        <input type='text' onChange={(e)=>{
        setCityName(e.target.value);
        }}/>
        <input type='button' value="save" onClick={loadWeather}/>

    {/* Show loading indicator or weather data based on the loading state */}
    {da?.loading ? (
      <p>Loading...</p>
    ) : (
      da?.data?  <DisplayWeatherData data={da?.data}/> : <></>
    )}
  </div>
  )
}
