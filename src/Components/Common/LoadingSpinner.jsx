import React from 'react';
import { RefreshCw } from 'lucide-react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
    <span className="ml-2 text-gray-600">Loading weather data...</span>
  </div>
);

export default LoadingSpinner;