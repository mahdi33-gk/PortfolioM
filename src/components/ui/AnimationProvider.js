import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimationProvider = ({ children }) => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
};

export default AnimationProvider;
