import { WEATHER_API_BASE, API_KEY } from '../utils/constants.js';

export const weatherAPI = {
  getCurrentWeather: async (city, units = 'metric') => {
    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`
      );
      
      if (!response.ok) {
        throw new Error(response.status === 404 ? 'City not found' : 'Failed to fetch weather data');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Weather API Error:', error);
      throw error;
    }
  },

  getForecast: async (city, units = 'metric') => {
    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch forecast data');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Forecast API Error:', error);
      throw error;
    }
  },

  getWeatherByCoords: async (lat, lon, units = 'metric') => {
    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather data by coordinates');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Weather by coords API Error:', error);
      throw error;
    }
  }
};
