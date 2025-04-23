import React, { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
      category: 'Full Stack',
      demoLink: 'https://ecommerce-demo.mehedi.dev',
      codeLink: 'https://github.com/mehedi/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Task+Manager',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
      category: 'Frontend',
      demoLink: 'https://taskmanager.mehedi.dev',
      codeLink: 'https://github.com/mehedi/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for social media analytics with data visualization and reporting features.',
      image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Social+Dashboard',
      technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      demoLink: 'https://social-dashboard.mehedi.dev',
      codeLink: 'https://github.com/mehedi/social-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'RESTful API Service',
      description: 'A scalable RESTful API service for a content management system with authentication and authorization.',
      image: 'https://placehold.co/600x400/6366f1/ffffff?text=API+Service',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      category: 'Backend',
      demoLink: 'https://api-docs.mehedi.dev',
      codeLink: 'https://github.com/mehedi/restful-api-service',
      featured: true
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'A weather forecast application with location-based services and interactive maps.',
      image: 'https://placehold.co/600x400/ec4899/ffffff?text=Weather+App',
      technologies: ['React', 'OpenWeatherMap API', 'Leaflet', 'Tailwind CSS'],
      category: 'Frontend',
      demoLink: 'https://weather.mehedi.dev',
      codeLink: 'https://github.com/mehedi/weather-app',
      featured: false
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Chat+App',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full Stack',
      demoLink: 'https://chat.mehedi.dev',
      codeLink: 'https://github.com/mehedi/chat-app',
      featured: false
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(projects);

  React.useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="section-container" id="projects">
      <h2 className="section-title animate__animated animate__fadeInDown">My Projects</h2>
      <p className="section-subtitle animate__animated animate__fadeIn animate__delay-1s">Check out some of my recent work</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
        {categories.map((category, idx) => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline'} animate__animated animate__fadeIn`}
            style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="card bg-base-100 shadow-xl overflow-hidden card-hover animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
          >
            <figure className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {project.featured && (
                <div className="absolute top-2 right-2 badge badge-primary animate__animated animate__pulse animate__infinite animate__slow">Featured</div>
              )}
            </figure>
            <div className="card-body">
              <h3 className="card-title animate__animated animate__fadeIn" style={{ animationDelay: `${index * 0.1 + 0.8}s` }}>
                {project.title}
                <div className="badge badge-accent">{project.category}</div>
              </h3>
              <p className="text-base-content/80 animate__animated animate__fadeIn" style={{ animationDelay: `${index * 0.1 + 1}s` }}>{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mt-2 animate__animated animate__fadeIn" style={{ animationDelay: `${index * 0.1 + 1.2}s` }}>
                {project.technologies.map((tech, techIdx) => (
                  <span key={tech} className="badge badge-outline animate__animated animate__fadeIn" style={{ animationDelay: `${index * 0.1 + techIdx * 0.05 + 1.3}s` }}>{tech}</span>
                ))}
              </div>
              
              <div className="card-actions justify-end mt-4 animate__animated animate__fadeIn" style={{ animationDelay: `${index * 0.1 + 1.5}s` }}>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm hover:animate__animated hover:animate__pulse">
                  <i className="fab fa-github mr-1"></i> Code
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm hover:animate__animated hover:animate__pulse">
                  <i className="fas fa-external-link-alt mr-1"></i> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 animate__animated animate__fadeInUp animate__delay-2s">
        <a href="/projects" className="btn btn-primary btn-lg animate__animated animate__pulse animate__infinite animate__slower">
          View All Projects <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};

export default Projects;
