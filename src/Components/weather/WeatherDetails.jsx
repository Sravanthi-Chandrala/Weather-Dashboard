import React from 'react';
import { Droplets, Wind, Navigation, Gauge, Eye, Sunrise, Sunset } from 'lucide-react';
import { formatTime } from '../../utils/helpers';

const WeatherDetails = ({ weather, unit }) => {
  const speedUnit = unit === 'metric' ? 'm/s' : 'mph';
  const visibilityUnit = unit === 'metric' ? 'km' : 'mi';
  const visibility = unit === 'metric' ? weather.visibility / 1000 : weather.visibility / 1609;

  const details = [
    { icon: <Droplets className="w-4 h-4" />, label: 'Humidity', value: `${weather.main.humidity}%`, color: 'from-blue-400 to-cyan-500' },
    { icon: <Wind className="w-4 h-4" />, label: 'Wind Speed', value: `${weather.wind.speed} ${speedUnit}`, color: 'from-gray-400 to-slate-500' },
    { icon: <Navigation className="w-4 h-4" />, label: 'Wind Direction', value: `${weather.wind.deg}°`, color: 'from-emerald-400 to-teal-500' },
    { icon: <Gauge className="w-4 h-4" />, label: 'Pressure', value: `${weather.main.pressure} hPa`, color: 'from-purple-400 to-indigo-500' },
    { icon: <Eye className="w-4 h-4" />, label: 'Visibility', value: `${visibility.toFixed(1)} ${visibilityUnit}`, color: 'from-amber-400 to-orange-500' },
    { icon: <Sunrise className="w-4 h-4" />, label: 'Sunrise', value: formatTime(weather.sys.sunrise), color: 'from-yellow-400 to-red-400' },
    { icon: <Sunset className="w-4 h-4" />, label: 'Sunset', value: formatTime(weather.sys.sunset), color: 'from-red-400 to-pink-500' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {details.map((detail, index) => (
        <div key={index} className="group relative overflow-hidden">
         
          <div className={`absolute inset-0 bg-gradient-to-br ${detail.color} opacity-80 rounded-lg`}></div>
          
       
          <div className="absolute inset-0 backdrop-blur-sm bg-white/20 rounded-lg border border-white/30"></div>
          
      
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg"></div>
          
        
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          
          {/* Content of cards */}
          <div className="relative p-3 text-white transform group-hover:scale-105 transition-transform duration-200">
            <div className="flex items-center space-x-2 mb-1">
              <div className="drop-shadow-lg">
                {detail.icon}
              </div>
              <span className="text-xs font-medium drop-shadow-md">{detail.label}</span>
            </div>
            <span className="text-sm font-bold drop-shadow-lg block">{detail.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;