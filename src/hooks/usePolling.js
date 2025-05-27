import { useEffect } from 'react';

export const usePolling = (callback, delay, dependencies = []) => {
  useEffect(() => {
    if (!delay) return;
    
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay, ...dependencies]);
};