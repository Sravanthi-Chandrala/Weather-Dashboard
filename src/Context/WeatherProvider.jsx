import React, { useState, useEffect } from 'react';
import { WeatherContext } from '../Context/WeatherContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { usePolling } from '../hooks/usePolling';
import { weatherAPI } from '../services/weatherAPI';

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useLocalStorage('temperatureUnit', 'metric');
  const [lastSearchedCity, setLastSearchedCity] = useLocalStorage('lastSearchedCity', 'London');

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const [weather, forecast] = await Promise.all([
        weatherAPI.getCurrentWeather(city, temperatureUnit),
        weatherAPI.getForecast(city, temperatureUnit)
      ]);

      setWeatherData(weather);
      setForecastData(forecast);
      setLastSearchedCity(city);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshWeatherData = () => {
    if (lastSearchedCity) {
      fetchWeatherData(lastSearchedCity);
    }
  };

  const toggleTemperatureUnit = () => {
    const newUnit = temperatureUnit === 'metric' ? 'imperial' : 'metric';
    setTemperatureUnit(newUnit);
    if (lastSearchedCity) {
     
      setTimeout(() => fetchWeatherData(lastSearchedCity), 100);
    }
  };

  // Auto-refresh every 30 seconds
  usePolling(refreshWeatherData, 30000, [lastSearchedCity]);


  useEffect(() => {
    if (lastSearchedCity) {
      fetchWeatherData(lastSearchedCity);
    }
  }, []);

  const value = {
    weatherData,
    forecastData,
    loading,
    error,
    temperatureUnit,
    lastSearchedCity,
    fetchWeatherData,
    refreshWeatherData,
    toggleTemperatureUnit
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};