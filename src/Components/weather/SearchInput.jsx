import React, { useState } from 'react';
import { Search, RefreshCw } from 'lucide-react';

const SearchInput = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <div className="relative group">
       
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl"></div>
        
      
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl"></div>
     
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className="relative w-full px-4 py-3 pl-12 pr-16 bg-transparent text-white placeholder-white/70 text-base font-medium rounded-xl border-0 outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
          disabled={isLoading}
        />
        
      
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/80 drop-shadow-lg" />
        
      
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading || !query.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 group"
        >
          <div className="relative overflow-hidden rounded-lg">
           
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-90"></div>
            <div className="absolute inset-0 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg"></div>
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg"></div>
            
            {/* Button content */}
            <div className="relative px-3 py-1.5 text-white font-semibold text-sm drop-shadow-lg transform group-hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                'Search'
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;