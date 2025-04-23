import React from 'react';
import About from '../components/sections/About';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <About />
      
      <div className="section-container bg-base-200">
        <h2 className="section-title">My Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="timeline timeline-vertical">
            <div className="timeline-item">
              <div className="timeline-start timeline-box">2020 - Present</div>
              <div className="timeline-middle">
                <div className="timeline-circle bg-primary"></div>
              </div>
              <div className="timeline-end timeline-box bg-primary text-primary-content">
                <h3 className="font-bold text-lg">Senior MERN Stack Developer</h3>
                <p>TechSolutions Inc.</p>
                <p className="text-sm mt-2">Leading development of enterprise web applications using the MERN stack. Managing a team of developers and implementing best practices.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-start timeline-box">2018 - 2020</div>
              <div className="timeline-middle">
                <div className="timeline-circle bg-secondary"></div>
              </div>
              <div className="timeline-end timeline-box bg-secondary text-secondary-content">
                <h3 className="font-bold text-lg">Full Stack Developer</h3>
                <p>WebCraft Studios</p>
                <p className="text-sm mt-2">Developed and maintained multiple client websites and web applications. Worked with React, Node.js, and various databases.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-start timeline-box">2016 - 2018</div>
              <div className="timeline-middle">
                <div className="timeline-circle bg-accent"></div>
              </div>
              <div className="timeline-end timeline-box bg-accent text-accent-content">
                <h3 className="font-bold text-lg">Frontend Developer</h3>
                <p>DigitalEdge Co.</p>
                <p className="text-sm mt-2">Focused on creating responsive user interfaces using React and modern CSS frameworks.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-start timeline-box">2014 - 2016</div>
              <div className="timeline-middle">
                <div className="timeline-circle bg-neutral"></div>
              </div>
              <div className="timeline-end timeline-box bg-neutral text-neutral-content">
                <h3 className="font-bold text-lg">Computer Science Degree</h3>
                <p>University of Technology</p>
                <p className="text-sm mt-2">Bachelor's degree in Computer Science with focus on web technologies and software engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Education</h2>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start">
                  <div className="badge badge-primary mr-2 mt-1">2014</div>
                  <div>
                    <h3 className="font-bold">BSc in Computer Science</h3>
                    <p className="text-sm">University of Technology</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="badge badge-primary mr-2 mt-1">2016</div>
                  <div>
                    <h3 className="font-bold">Web Development Bootcamp</h3>
                    <p className="text-sm">CodeCamp Academy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="badge badge-primary mr-2 mt-1">2018</div>
                  <div>
                    <h3 className="font-bold">Advanced React Certification</h3>
                    <p className="text-sm">React Training Institute</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Interests & Hobbies</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col items-center text-center p-4 bg-base-200 rounded-box">
                  <i className="fas fa-laptop-code text-3xl text-primary mb-2"></i>
                  <h3 className="font-bold">Open Source</h3>
                  <p className="text-sm">Contributing to open source projects</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-base-200 rounded-box">
                  <i className="fas fa-book text-3xl text-secondary mb-2"></i>
                  <h3 className="font-bold">Reading</h3>
                  <p className="text-sm">Tech books and science fiction</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-base-200 rounded-box">
                  <i className="fas fa-hiking text-3xl text-accent mb-2"></i>
                  <h3 className="font-bold">Hiking</h3>
                  <p className="text-sm">Exploring nature trails</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-base-200 rounded-box">
                  <i className="fas fa-chess text-3xl text-info mb-2"></i>
                  <h3 className="font-bold">Chess</h3>
                  <p className="text-sm">Strategic thinking and competition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
