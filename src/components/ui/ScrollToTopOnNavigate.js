import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component to handle scrolling to top when navigating between routes
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

export default ScrollToTopOnNavigate;
