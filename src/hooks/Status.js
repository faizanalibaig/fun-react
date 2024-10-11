import { useState, useEffect } from 'react';

export const useStatus = () => {
  const [status, setStatus] = useState(true);

  try {
    useEffect(() => {
      function handleOnline() {
        setStatus(true);
      }
      function handleOffline() {
        setStatus(false);
      }

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
  } catch (error) {
    throw new Error(error.message || 'Invalid state');
  }

  return status;
};
