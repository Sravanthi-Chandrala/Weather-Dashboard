import React, { useContext } from 'react';
import { Cloud } from 'lucide-react';
import { WeatherContext } from '../Context/WeatherContext';
import SearchInput from './weather/SearchInput';
import TemperatureToggle from './weather/TemperatureToggle';
import WeatherCard from './weather/WeatherCard';
import WeatherDetails from './weather/WeatherDetails';
import WeatherForecast from './weather/WeatherForecast';
import LoadingSpinner from './Common/LoadingSpinner';
import ErrorMessage from './Common/ErrorMessage';

const WeatherDashboard = () => {
  const {
    weatherData,
    forecastData,
    loading,
    error,
    temperatureUnit,
    fetchWeatherData,
    toggleTemperatureUnit
  } = useContext(WeatherContext);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 flex flex-col overflow-hidden">
      {/* Main container */}
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full p-3">
       
        <div className="flex-shrink-0  text-center mb-3">
          <div className="flex flext-row-3 backdrop-blur-md bg-white/20 rounded-xl p-4 shadow-xl border border-white/30">
            <h1 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">Weather Dashboard</h1>
            <SearchInput onSearch={fetchWeatherData} isLoading={loading} />
            <TemperatureToggle unit={temperatureUnit} onToggle={toggleTemperatureUnit} />
          </div>
        </div>

    
        <div className="flex-1 flex flex-col min-h-0">
          {loading && (
            <div className="flex-1 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}

          {error && (
            <div className="flex-1 flex items-center justify-center">
              <ErrorMessage 
                message={error}
                onRetry={() => fetchWeatherData('London')}
              />
            </div>
          )}

          {weatherData && !loading && (
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">
              {/* Weather Card */}
              <div className="lg:col-span-1 lg:order-2 flex flex-col">
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/25 to-white/10 rounded-xl p-4 shadow-2xl border border-white/20 flex-shrink-0">
                  <WeatherCard weather={weatherData} unit={temperatureUnit} />
                </div>
              </div>

              
              <div className="lg:col-span-2 lg:order-1 flex flex-col space-y-3 min-h-0">
                {/* Weather Details */}
                <div className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-4 shadow-2xl border border-white/20 flex-shrink-0">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">Weather Details</h3>
                  <WeatherDetails weather={weatherData} unit={temperatureUnit} />
                </div>

                {/* Weather Forecast*/}
                {forecastData && (
                  <div className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-4 shadow-2xl border border-white/20 flex-1 min-h-0 overflow-hidden">
                    <WeatherForecast forecast={forecastData} unit={temperatureUnit} />
                  </div>
                )}
              </div>
            </div>
          )}

          {!weatherData && !loading && !error && (
            <div className="flex-1 flex items-center justify-center">
              <div className="backdrop-blur-md bg-white/20 rounded-xl p-8 shadow-xl border border-white/30 text-center">
                <Cloud className="w-16 h-16 text-white/80 mx-auto mb-4 drop-shadow-lg" />
                <h2 className="text-xl font-semibold text-white mb-3 drop-shadow-md">Welcome to Weather Dashboard</h2>
                <p className="text-white/80 drop-shadow-sm">Search for a city to get started</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;