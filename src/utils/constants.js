// importing env variables from .env file
export const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
export const WEATHER_API_BASE = import.meta.env.VITE_OPENWEATHER_BASE_URL || 'https://api.openweathermap.org/data/2.5';

// Weather condition codes mapping
export const WEATHER_CONDITIONS = {
  THUNDERSTORM: { min: 200, max: 299, icon: 'thunderstorm' },
  DRIZZLE: { min: 300, max: 399, icon: 'drizzle' },
  RAIN: { min: 500, max: 599, icon: 'rain' },
  SNOW: { min: 600, max: 699, icon: 'snow' },
  ATMOSPHERE: { min: 700, max: 799, icon: 'fog' },
  CLEAR: { min: 800, max: 800, icon: 'clear' },
  CLOUDS: { min: 801, max: 899, icon: 'clouds' }
};

export const DEFAULT_CITIES = [
  'London',
  'New York',
  'Tokyo',
  'Paris',
  'Sydney'
];