import React, { useContext } from 'react';
import { Cloud, RefreshCw } from 'lucide-react';
import { WeatherContext } from '../Context/WeatherContext';

const Header = () => {
  const { refreshWeatherData, loading } = useContext(WeatherContext);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Cloud className="w-8 h-8 mr-2 text-blue-500" />
            Weather Dashboard
          </h1>
          <button
            onClick={refreshWeatherData}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;