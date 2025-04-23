import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-accent">M</span>ehedi
            </Link>
            <p className="text-base-300 max-w-md">
              Full-stack MERN developer specializing in creating responsive, user-friendly web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/mehedi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/mehedi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://twitter.com/mehedi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="mailto:mehedi@example.com" className="hover:text-accent transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-base-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-base-300 hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-base-300 hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-base-300 hover:text-accent transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-base-300 hover:text-accent transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-accent"></i>
                <span className="text-base-300">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-accent"></i>
                <span className="text-base-300">+880 1234 567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-accent"></i>
                <span className="text-base-300">mehedi@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-globe text-accent"></i>
                <span className="text-base-300">www.mehedi.dev</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base-300">© {currentYear} Mehedi. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-base-300 hover:text-accent transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-base-300 hover:text-accent transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
