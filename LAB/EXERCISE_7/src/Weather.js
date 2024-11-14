// src/Weather.js

import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '9d9f53269f3f412ace2c1f1dec8178e5'; // Replace with your OpenWeatherMap API key

  const getWeather = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    console.log(`Fetching weather for: ${location}`); // Log the location being fetched

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        const errorData = await response.json(); // Get the error response from the API
        console.error('Error Data:', errorData); // Log the error data
        throw new Error('Unable to fetch weather data. Please check the location.');
      }

      const data = await response.json();
      console.log('Weather Data:', data); // Log the successful response data
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather Forecast</h1>
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
