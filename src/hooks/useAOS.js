import { useEffect } from 'react';

export const useAOS = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.AOS && window.AOS.refresh) {
        window.AOS.refresh();
      }
    };

    // Refresh AOS after component mounts to ensure animations work
    const refreshAOS = () => {
      if (window.AOS && window.AOS.refresh) {
        window.AOS.refresh();
      } else {
        // If AOS is not ready, try again after a short delay
        setTimeout(refreshAOS, 100);
      }
    };

    // Initial refresh
    setTimeout(refreshAOS, 500);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
