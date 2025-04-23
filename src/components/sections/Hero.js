import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const titles = ['MERN Stack Developer', 'React Specialist', 'Node.js Expert', 'MongoDB Developer', 'UI/UX Enthusiast'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setText(titles[index].substring(0, text.length + 1));
      
      if (text.length === titles[index].length) {
        // Wait before starting to delete
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            setText(text.substring(0, text.length - 1));
            if (text.length === 0) {
              clearInterval(deleteInterval);
              setIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }
          }, 50);
        }, 2000);
        
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [text, index, titles]);
  
  return (
    <div className="hero min-h-screen bg-base-200 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                opacity: Math.random() * 0.3,
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
                filter: 'blur(50px)'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 flex justify-center">
          <div className="avatar animate-float">
            <div className="w-64 h-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden shadow-2xl">
              <img src="https://placehold.co/400x400/3b82f6/ffffff?text=M" alt="Mehedi" />
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold animate__animated animate__fadeInUp">
            Hi, I'm <span className="text-primary">Mehedi</span>
          </h1>
          
          <div className="h-12 my-4">
            <h2 className="text-2xl font-bold animate__animated animate__fadeInUp animate__delay-1s">
              <span className="text-accent animate-typing">{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="py-6 max-w-md mx-auto lg:mx-0 animate__animated animate__fadeInUp animate__delay-2s">
            I build modern, responsive web applications using the latest technologies. 
            Specializing in the MERN stack, I create seamless user experiences with 
            clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate__animated animate__fadeInUp animate__delay-3s">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope mr-2"></i> Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              <i className="fas fa-code mr-2"></i> View Projects
            </a>
          </div>
          
          <div className="mt-8 flex justify-center lg:justify-start space-x-4 animate__animated animate__fadeInUp animate__delay-4s">
            <a href="https://github.com/mehedi" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/mehedi" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://twitter.com/mehedi" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="mailto:mehedi@example.com" className="btn btn-circle btn-ghost">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
