import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js). I'm also proficient with React Router, Tailwind CSS, DaisyUI, Firebase, and various other frontend and backend technologies. My focus is on creating responsive, user-friendly web applications with clean, maintainable code."
    },
    {
      question: "What is your development process like?",
      answer: "My development process typically follows these steps: 1) Requirement gathering and analysis, 2) Planning and architecture design, 3) UI/UX design, 4) Frontend and backend development, 5) Testing and quality assurance, 6) Deployment, and 7) Maintenance and support. I emphasize clear communication throughout the process and adapt my approach based on project needs."
    },
    {
      question: "How long does it take you to complete a typical project?",
      answer: "Project timelines vary significantly based on complexity, scope, and requirements. A simple website might take 1-2 weeks, while a complex web application could take 2-3 months or more. I always provide a detailed timeline estimate after thoroughly understanding the project requirements."
    },
    {
      question: "Do you work on fixed-price projects or hourly rates?",
      answer: "I'm flexible and can work with both fixed-price projects and hourly rates, depending on what works best for the client and the nature of the project. For well-defined projects, fixed-price agreements often work well, while ongoing development or maintenance might be better suited for hourly arrangements."
    },
    {
      question: "Can you handle both frontend and backend development?",
      answer: "Yes, as a full-stack MERN developer, I handle both frontend and backend development. On the frontend, I create responsive interfaces using React, while on the backend, I build robust APIs with Node.js and Express, and design efficient database schemas with MongoDB."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, I offer website maintenance services including bug fixes, security updates, performance optimization, feature additions, and content updates. I can provide ongoing support through monthly maintenance packages or on an as-needed basis."
    },
    {
      question: "How do you handle project communication?",
      answer: "I believe in clear, consistent communication. Depending on client preferences, I use tools like Slack, Discord, email, or project management platforms like Trello or Jira. I provide regular updates, schedule check-in meetings as needed, and am always available to address questions or concerns."
    },
    {
      question: "Can you work with existing codebases?",
      answer: "Yes, I'm experienced in working with existing codebases. I can analyze current code, understand the architecture, and seamlessly integrate new features or improvements. I'm also skilled at refactoring and optimizing existing code to improve performance and maintainability."
    }
  ];

  return (
    <div className="section-container bg-base-200">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtitle">Answers to common questions about my services and process</p>
      
      <div className="max-w-3xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="collapse collapse-plus bg-base-100 mb-4 shadow-md rounded-box"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-base-content/80">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
        <p className="mb-6">Feel free to reach out to me directly, and I'll be happy to help.</p>
        <a href="#contact" className="btn btn-primary">
          Contact Me <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};

export default Faq;
