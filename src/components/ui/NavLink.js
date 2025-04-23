import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavLink = ({ to, children, className, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    
    // If it's a hash link, scroll to the element
    if (to.includes('#')) {
      const id = to.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <a 
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? 'nav-link-active' : 'nav-link'}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
