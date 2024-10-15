import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } from './slice/weatherSlice';

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const fetchWeather = async () => {
    dispatch(fetchWeatherStart());
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
      dispatch(fetchWeatherSuccess(response.data));
      localStorage.setItem('lastWeather', JSON.stringify(response.data));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };
  
  // On component mount, check for last weather
  useEffect(() => {
    const lastWeather = localStorage.getItem('lastWeather');
    if (lastWeather) {
      dispatch(fetchWeatherSuccess(JSON.parse(lastWeather)));
    }
  }, []);
  

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button className="btn btn-primary ms-2" onClick={fetchWeather}>Get Weather</button>
      {weather.loading && <p>Loading...</p>}
      {weather.error && <p>{weather.error}</p>}
      {weather.data && <p>Weather: {weather.data.weather[0].description}</p>}
    </div>
  );
};

export default Weather;
