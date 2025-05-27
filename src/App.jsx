import React from 'react';
import { WeatherProvider } from './Context/WeatherProvider';
import Header from './layout/Header';
import WeatherDashboard from './Components/WeatherDashboard';

const App = () => {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-full mx-auto">
          <WeatherDashboard />
        </main>
      </div>
    </WeatherProvider>
  );
};

export default App;