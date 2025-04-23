import React, { useState } from 'react';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('contact');
  
  return (
    <div className="pt-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your project or opportunities</p>
        
        <div className="tabs tabs-boxed justify-center mb-8">
          <a 
            className={`tab ${activeTab === 'contact' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Form
          </a>
          <a 
            className={`tab ${activeTab === 'hire' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('hire')}
          >
            Hire Me
          </a>
          <a 
            className={`tab ${activeTab === 'availability' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('availability')}
          >
            Availability
          </a>
        </div>
        
        {activeTab === 'contact' && (
          <Contact />
        )}
        
        {activeTab === 'hire' && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">Work With Me</h3>
              <p className="mb-4">
                I'm available for freelance projects, full-time positions, and consulting work. 
                Here's what you can expect when working with me:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h4 className="card-title">
                      <i className="fas fa-code text-primary mr-2"></i>
                      Custom Development
                    </h4>
                    <p>
                      Tailored solutions built specifically for your business needs using the latest technologies
                      and best practices.
                    </p>
                  </div>
                </div>
                
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h4 className="card-title">
                      <i className="fas fa-mobile-alt text-primary mr-2"></i>
                      Responsive Design
                    </h4>
                    <p>
                      Applications that work flawlessly across all devices, from desktop to mobile,
                      providing a consistent user experience.
                    </p>
                  </div>
                </div>
                
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h4 className="card-title">
                      <i className="fas fa-tachometer-alt text-primary mr-2"></i>
                      Performance Optimization
                    </h4>
                    <p>
                      Fast-loading, efficient applications optimized for performance to provide
                      the best user experience.
                    </p>
                  </div>
                </div>
                
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h4 className="card-title">
                      <i className="fas fa-shield-alt text-primary mr-2"></i>
                      Secure Applications
                    </h4>
                    <p>
                      Security best practices implemented at every level to protect your data
                      and your users.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="divider">Hiring Process</div>
              
              <ul className="steps steps-vertical lg:steps-horizontal w-full">
                <li className="step step-primary">Initial Consultation</li>
                <li className="step step-primary">Project Proposal</li>
                <li className="step step-primary">Agreement & Timeline</li>
                <li className="step step-primary">Development & Updates</li>
                <li className="step step-primary">Delivery & Support</li>
              </ul>
              
              <div className="mt-8 text-center">
                <a href="mailto:mehedi@example.com" className="btn btn-primary btn-lg">
                  <i className="fas fa-paper-plane mr-2"></i> Start a Project
                </a>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'availability' && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">My Availability</h3>
              
              <div className="alert alert-success mb-6">
                <i className="fas fa-check-circle"></i>
                <span>Currently available for new projects starting June 2025</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Service Type</th>
                      <th>Availability</th>
                      <th>Typical Timeline</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Full Website Development</td>
                      <td>June 2025</td>
                      <td>4-8 weeks</td>
                      <td><span className="badge badge-success">Available</span></td>
                    </tr>
                    <tr>
                      <td>Web Application</td>
                      <td>July 2025</td>
                      <td>8-12 weeks</td>
                      <td><span className="badge badge-success">Available</span></td>
                    </tr>
                    <tr>
                      <td>Frontend Development</td>
                      <td>May 2025</td>
                      <td>2-4 weeks</td>
                      <td><span className="badge badge-warning">Limited</span></td>
                    </tr>
                    <tr>
                      <td>Backend API Development</td>
                      <td>May 2025</td>
                      <td>3-6 weeks</td>
                      <td><span className="badge badge-warning">Limited</span></td>
                    </tr>
                    <tr>
                      <td>Consulting</td>
                      <td>Immediate</td>
                      <td>Hourly/Weekly</td>
                      <td><span className="badge badge-success">Available</span></td>
                    </tr>
                    <tr>
                      <td>Code Review</td>
                      <td>Immediate</td>
                      <td>1-3 days</td>
                      <td><span className="badge badge-success">Available</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-xl mb-4">Working Hours</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="stats bg-primary text-primary-content">
                    <div className="stat">
                      <div className="stat-title">Regular Hours</div>
                      <div className="stat-value">Mon-Fri</div>
                      <div className="stat-desc">9:00 AM - 6:00 PM (GMT+6)</div>
                    </div>
                  </div>
                  
                  <div className="stats bg-secondary text-secondary-content">
                    <div className="stat">
                      <div className="stat-title">Response Time</div>
                      <div className="stat-value">24 Hours</div>
                      <div className="stat-desc">For emails and inquiries</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="btn btn-primary btn-lg">
                  <i className="fas fa-calendar-alt mr-2"></i> Schedule a Call
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
