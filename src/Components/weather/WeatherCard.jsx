import React from 'react';
import { MapPin } from 'lucide-react';
import { getWeatherIcon } from '../../utils/weatherIcons';

const WeatherCard = ({ weather, unit }) => {
    const unitSymbol = unit === 'metric' ? '°C' : '°F';

   
    const iconData = getWeatherIcon(weather.weather[0].icon);
    const IconComponent = iconData.component;

    return (
        <div className="relative overflow-hidden h-[400px] mt-10">
      
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 via-blue-500/80 to-purple-600/80 rounded-xl"></div>

    
            <div className="absolute inset-0 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20"></div>

     
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"></div>

            <div className="relative text-white p-6 rounded-xl shadow-2xl h-full flex flex-col justify-between">
              
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold flex items-center drop-shadow-lg mb-2">
                            <MapPin className="w-5 h-5 mr-2 text-white/90 flex-shrink-0" />
                            <span className="truncate">{weather.name}, {weather.sys.country}</span>
                        </h2>
                        <p className="text-white/90 capitalize text-base drop-shadow-md font-medium">
                            {weather.weather[0].description}
                        </p>
                    </div>
                    <div className="drop-shadow-2xl ml-4">
                        <IconComponent className="w-20 h-20 text-white/90" />
                    </div>
                </div>

           
                <div className="flex items-center justify-center mb-8">
                    <span className="text-6xl font-bold drop-shadow-lg">
                        {Math.round(weather.main.temp)}{unitSymbol}
                    </span>
                </div>

               
                <div className="space-y-4">
                    <div className="text-center">
                        <p className="text-white/90 text-lg drop-shadow-md">
                            Feels like {Math.round(weather.main.feels_like)}{unitSymbol}
                        </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <div className="flex items-center space-x-6">
                            <div className="text-center">
                                <p className="text-white/70 text-sm uppercase tracking-wide">High</p>
                                <p className="text-white text-lg font-semibold drop-shadow-md">
                                    {Math.round(weather.main.temp_max)}{unitSymbol}
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-white/70 text-sm uppercase tracking-wide">Low</p>
                                <p className="text-white text-lg font-semibold drop-shadow-md">
                                    {Math.round(weather.main.temp_min)}{unitSymbol}
                                </p>
                            </div>
                        </div>
                        
                        <div className="text-right">
                            <p className="text-white/90 text-sm drop-shadow-md">
                                Humidity: {weather.main.humidity}%
                            </p>
                            <p className="text-white/90 text-sm drop-shadow-md">
                                Pressure: {weather.main.pressure} hPa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;