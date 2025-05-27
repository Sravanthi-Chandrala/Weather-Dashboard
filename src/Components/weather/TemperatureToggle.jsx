import React from 'react';

const TemperatureToggle = ({ unit, onToggle }) => (
  <div className="flex items-center justify-center space-x-4 mb-6">
    {/* Celsius label */}
    <span 
      className={`font-bold text-xl drop-shadow-lg transition-all duration-300 ${
        unit === 'metric' 
          ? 'text-white scale-110' 
          : 'text-white/60 hover:text-white/80'
      }`}
    >
      °C
    </span>
    
  
    <div className="relative group">
   
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-2xl"></div>
      
   
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent rounded-t-full"></div>
      
  
      <button
        onClick={onToggle}
        className="relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
      
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          unit === 'imperial' 
            ? 'bg-gradient-to-r from-orange-400 to-red-500' 
            : 'bg-gradient-to-r from-cyan-400 to-blue-500'
        }`}></div>
        
    
        <div className="absolute inset-0 backdrop-blur-sm bg-white/20 rounded-full border border-white/30"></div>
        
      
        <div className="relative">
          <span
            className={`inline-block h-6 w-6 transform rounded-full transition-all duration-300 ${
              unit === 'imperial' ? 'translate-x-9' : 'translate-x-1'
            }`}
          >
        
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-full"></div>
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent rounded-t-full"></div>
          </span>
        </div>
      </button>
    </div>
    
    {/* Fahrenheit label */}
    <span 
      className={`font-bold text-xl drop-shadow-lg transition-all duration-300 ${
        unit === 'imperial' 
          ? 'text-white scale-110' 
          : 'text-white/60 hover:text-white/80'
      }`}
    >
      °F
    </span>
  </div>
);

export default TemperatureToggle;