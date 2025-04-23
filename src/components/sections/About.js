import React from 'react';

const About = () => {
  return (
    <div className="section-container" id="about">
      <h2 className="section-title animate__animated animate__fadeInDown">About Me</h2>
      <p className="section-subtitle animate__animated animate__fadeIn animate__delay-1s">Learn more about my background and experience</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 animate__animated animate__fadeInLeft animate__delay-1s">
          <h3 className="text-2xl font-bold">I'm Mehedi, a Full Stack MERN Developer</h3>
          <p className="text-base-content/80">
            I specialize in building modern web applications using the MERN stack (MongoDB, Express.js, React, and Node.js).
            With a passion for creating clean, efficient, and user-friendly applications, I strive to deliver high-quality
            solutions that meet client needs and exceed expectations.
          </p>
          <p className="text-base-content/80">
            My journey in web development began 5 years ago, and since then, I've worked on various projects ranging from
            small business websites to complex web applications. I'm constantly learning and adapting to new technologies
            to stay at the forefront of web development.
          </p>
          <div className="pt-4">
            <a href="/about" className="btn btn-primary animate__animated animate__pulse animate__infinite animate__slower">More About Me</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 animate__animated animate__fadeInRight animate__delay-1s">
          <div className="stat bg-base-200 rounded-box p-4 shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__zoomIn animate__delay-2s">
            <div className="stat-figure text-primary">
              <i className="fas fa-code text-3xl"></i>
            </div>
            <div className="stat-title">Projects</div>
            <div className="stat-value text-primary">50+</div>
            <div className="stat-desc">Completed projects</div>
          </div>
          
          <div className="stat bg-base-200 rounded-box p-4 shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__zoomIn animate__delay-2s">
            <div className="stat-figure text-secondary">
              <i className="fas fa-users text-3xl"></i>
            </div>
            <div className="stat-title">Clients</div>
            <div className="stat-value text-secondary">30+</div>
            <div className="stat-desc">Satisfied clients</div>
          </div>
          
          <div className="stat bg-base-200 rounded-box p-4 shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__zoomIn animate__delay-3s">
            <div className="stat-figure text-accent">
              <i className="fas fa-clock text-3xl"></i>
            </div>
            <div className="stat-title">Experience</div>
            <div className="stat-value text-accent">5+</div>
            <div className="stat-desc">Years of experience</div>
          </div>
          
          <div className="stat bg-base-200 rounded-box p-4 shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__zoomIn animate__delay-3s">
            <div className="stat-figure text-info">
              <i className="fas fa-certificate text-3xl"></i>
            </div>
            <div className="stat-title">Certifications</div>
            <div className="stat-value text-info">10+</div>
            <div className="stat-desc">Professional certifications</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
