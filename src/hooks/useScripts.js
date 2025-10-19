import { useEffect } from 'react';

export const useScripts = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initializeScripts = async () => {
      try {
        await loadScript('/js/jquery-1.12.4.min.js');
        
        await new Promise(resolve => {
          const checkJQuery = () => {
            if (window.jQuery) {
              resolve();
            } else {
              setTimeout(checkJQuery, 50);
            }
          };
          checkJQuery();
        });
        
        await loadScript('/js/bootstrap.bundle.min.js');
        await loadScript('/js/venobox.min.js');
        await loadScript('/js/waypoints.min.js');
        await loadScript('/js/jquery.counterup.min.js');
        await loadScript('/js/slick.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
        await loadScript('/js/aos.js');
        
        // Wait for AOS to be available
        await new Promise(resolve => {
          const checkAOS = () => {
            if (window.AOS) {
              resolve();
            } else {
              setTimeout(checkAOS, 50);
            }
          };
          checkAOS();
        });
        
        // Initialize AOS
        if (window.AOS) {
          window.AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            delay: 0,
            easing: 'ease-in-out'
          });
        }
        
        // Wait for Swiper to be available before loading app.js
        await new Promise(resolve => {
          const checkSwiper = () => {
            if (window.Swiper) {
              resolve();
            } else {
              setTimeout(checkSwiper, 50);
            }
          };
          checkSwiper();
        });
        
        await loadScript('/js/app.js');
        
        // Final AOS refresh to ensure everything is working
        setTimeout(() => {
          if (window.AOS && window.AOS.refresh) {
            window.AOS.refresh();
          }
        }, 1000);
        
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    initializeScripts();
  }, []);
};
