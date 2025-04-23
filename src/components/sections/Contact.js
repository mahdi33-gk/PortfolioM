import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="section-container bg-base-200" id="contact">
      <h2 className="section-title animate__animated animate__fadeInDown">Contact Me</h2>
      <p className="section-subtitle animate__animated animate__fadeIn animate__delay-1s">Get in touch for collaborations or inquiries</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Information */}
        <div className="space-y-6 animate__animated animate__fadeInLeft animate__delay-1s">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-base-content/80 mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center animate__animated animate__fadeInUp animate__delay-1s">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 animate__animated animate__pulse animate__infinite animate__slow">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center animate__animated animate__fadeInUp animate__delay-2s">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 animate__animated animate__pulse animate__infinite animate__slow">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>mehedi@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center animate__animated animate__fadeInUp animate__delay-3s">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 animate__animated animate__pulse animate__infinite animate__slow">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p>+880 1234 567890</p>
                  </div>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <h4 className="font-bold mb-2 animate__animated animate__fadeIn animate__delay-3s">Follow Me</h4>
              <div className="flex space-x-3 animate__animated animate__fadeInUp animate__delay-3s">
                <a href="https://github.com/mehedi" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm hover:animate__animated hover:animate__rubberBand">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/mehedi" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-primary hover:animate__animated hover:animate__rubberBand">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/mehedi" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-info hover:animate__animated hover:animate__rubberBand">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/mehedi" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm btn-accent hover:animate__animated hover:animate__rubberBand">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="animate__animated animate__fadeInRight animate__delay-1s">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
              
              {submitSuccess && (
                <div className="alert alert-success mb-4 animate__animated animate__fadeIn">
                  <i className="fas fa-check-circle animate__animated animate__bounceIn"></i>
                  <span>Your message has been sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`input input-bordered w-full ${errors.name ? 'input-error animate__animated animate__shakeX' : ''}`}
                  />
                  {errors.name && <span className="text-error text-sm mt-1 animate__animated animate__fadeIn">{errors.name}</span>}
                </div>
                
                <div className="form-control mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className={`input input-bordered w-full ${errors.email ? 'input-error animate__animated animate__shakeX' : ''}`}
                  />
                  {errors.email && <span className="text-error text-sm mt-1 animate__animated animate__fadeIn">{errors.email}</span>}
                </div>
                
                <div className="form-control mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`input input-bordered w-full ${errors.subject ? 'input-error animate__animated animate__shakeX' : ''}`}
                  />
                  {errors.subject && <span className="text-error text-sm mt-1 animate__animated animate__fadeIn">{errors.subject}</span>}
                </div>
                
                <div className="form-control mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className={`textarea textarea-bordered h-32 ${errors.message ? 'textarea-error animate__animated animate__shakeX' : ''}`}
                  ></textarea>
                  {errors.message && <span className="text-error text-sm mt-1 animate__animated animate__fadeIn">{errors.message}</span>}
                </div>
                
                <button
                  type="submit"
                  className={`btn btn-primary w-full animate__animated animate__fadeInUp animate__delay-3s ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
