import { Cloud, Sun, CloudRain, CloudSnow } from 'lucide-react';

export const getWeatherIcon = (weatherCode, isDay = true) => {
  const iconMap = {
    '01d': { component: Sun, className: "w-16 h-16 text-yellow-500" },
    '01n': { component: Sun, className: "w-16 h-16 text-yellow-300" },
    '02d': { component: Cloud, className: "w-16 h-16 text-gray-400" },
    '02n': { component: Cloud, className: "w-16 h-16 text-gray-500" },
    '03d': { component: Cloud, className: "w-16 h-16 text-gray-500" },
    '03n': { component: Cloud, className: "w-16 h-16 text-gray-600" },
    '04d': { component: Cloud, className: "w-16 h-16 text-gray-600" },
    '04n': { component: Cloud, className: "w-16 h-16 text-gray-700" },
    '09d': { component: CloudRain, className: "w-16 h-16 text-blue-500" },
    '09n': { component: CloudRain, className: "w-16 h-16 text-blue-600" },
    '10d': { component: CloudRain, className: "w-16 h-16 text-blue-500" },
    '10n': { component: CloudRain, className: "w-16 h-16 text-blue-600" },
    '11d': { component: CloudRain, className: "w-16 h-16 text-purple-500" },
    '11n': { component: CloudRain, className: "w-16 h-16 text-purple-600" },
    '13d': { component: CloudSnow, className: "w-16 h-16 text-blue-200" },
    '13n': { component: CloudSnow, className: "w-16 h-16 text-blue-300" },
    '50d': { component: Cloud, className: "w-16 h-16 text-gray-400" },
    '50n': { component: Cloud, className: "w-16 h-16 text-gray-500" }
  };
  
  return iconMap[weatherCode] || { component: Cloud, className: "w-16 h-16 text-gray-500" };
};