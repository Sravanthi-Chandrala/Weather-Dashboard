import React from 'react';
import { getWeatherIcon } from '../../utils/weatherIcons';
import { formatDate } from '../../utils/helpers';

const WeatherForecast = ({ forecast, unit }) => {
  const unitSymbol = unit === 'metric' ? '°C' : '°F';
  
  
  const dailyForecast = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md flex-shrink-0">5-Day Forecast</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 flex-1">
        {dailyForecast.map((day, index) => {
      
          const iconData = getWeatherIcon(day.weather[0].icon);
          const IconComponent = iconData.component;
          
          
          const cardGradients = [
            'from-blue-500/80 via-cyan-400/60 to-teal-300/40',
            'from-purple-500/80 via-pink-400/60 to-rose-300/40', 
            'from-emerald-500/80 via-green-400/60 to-lime-300/40',
            'from-orange-500/80 via-amber-400/60 to-yellow-300/40', 
            'from-indigo-500/80 via-violet-400/60 to-fuchsia-300/40' 
          ];
          
          const hoverGradients = [
            'from-blue-400/90 via-cyan-300/70 to-teal-200/50',
            'from-purple-400/90 via-pink-300/70 to-rose-200/50',
            'from-emerald-400/90 via-green-300/70 to-lime-200/50',
            'from-orange-400/90 via-amber-300/70 to-yellow-200/50',
            'from-indigo-400/90 via-violet-300/70 to-fuchsia-200/50'
          ];
          
          return (
            <div key={index} className="group relative overflow-hidden">
           
              <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index]} rounded-lg`}></div>
              
             
              <div className="absolute inset-0 backdrop-blur-md bg-white/15 rounded-lg border border-white/30 shadow-lg"></div>
              
             
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg"></div>
              
             
              <div className={`absolute inset-0 bg-gradient-to-br ${hoverGradients[index]} opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg`}></div>
              
              {/* Content */}
              <div className="relative p-3 text-center text-white transform group-hover:scale-105 transition-transform duration-200 h-full flex flex-col justify-between">
                <p className="font-bold text-sm mb-2 drop-shadow-lg">
                  {index === 0 ? 'Today' : formatDate(day.dt)}
                </p>
                
                <div className="flex justify-center mb-2 drop-shadow-xl">
                  <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                
                <p className="text-xs text-white/95 capitalize mb-2 drop-shadow-md font-medium line-clamp-2">
                  {day.weather[0].description}
                </p>
                
                <div className="flex justify-between text-xs">
                  <span className="font-bold drop-shadow-lg text-white">
                    {Math.round(day.main.temp_max)}{unitSymbol}
                  </span>
                  <span className="text-white/90 drop-shadow-lg">
                    {Math.round(day.main.temp_min)}{unitSymbol}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;