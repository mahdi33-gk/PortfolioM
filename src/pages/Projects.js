import React, { useState } from 'react';
import Projects from '../components/sections/Projects';

const ProjectsPage = () => {
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
      featured: true,
      longDescription: 'This comprehensive e-commerce platform provides businesses with everything they need to sell products online. The application features a responsive product catalog, advanced filtering and search capabilities, user authentication and profiles, shopping cart functionality, secure checkout with Stripe integration, order management, and an admin dashboard for product and order management. Built with the MERN stack, it utilizes React for the frontend, Node.js and Express for the backend API, and MongoDB for data storage. Redux manages the application state, while Stripe handles payment processing securely.'
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
      featured: true,
      longDescription: 'This task management application helps teams collaborate effectively by providing a visual interface for organizing and tracking tasks. Features include drag-and-drop task organization across different status columns (To Do, In Progress, Review, Done), real-time updates using Firebase, task assignment to team members, due date tracking with notifications, file attachments, commenting system, and detailed progress reporting. The frontend is built with React and styled with Tailwind CSS, while Firebase provides the backend services including authentication, real-time database, and storage.'
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
      featured: false,
      longDescription: 'This social media analytics dashboard provides businesses with insights into their social media performance across multiple platforms. The application integrates with APIs from major social networks (Facebook, Twitter, Instagram, LinkedIn) to collect and analyze data. Features include customizable widgets for different metrics, interactive data visualizations using D3.js, comparative analysis across platforms, audience demographics, content performance tracking, and scheduled PDF report generation. The MERN stack powers this application, with React for the frontend interface, Node.js and Express for the backend API and data processing, and MongoDB for storing historical data and user preferences.'
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
      featured: true,
      longDescription: 'This RESTful API service provides a robust backend for content management systems, offering endpoints for content creation, retrieval, updating, and deletion. The API features JWT-based authentication and role-based authorization, comprehensive input validation, rate limiting for security, pagination and filtering for large datasets, and detailed logging for monitoring. Built with Node.js and Express, it uses MongoDB for data storage and Mongoose for object modeling. The API is fully documented with Swagger, making it easy for developers to understand and integrate with. The service follows best practices for security, performance, and scalability.'
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
      featured: false,
      longDescription: 'This weather forecast application provides users with accurate weather information for any location worldwide. Features include current weather conditions, 7-day forecasts, hourly predictions, interactive maps using Leaflet.js, location search with autocomplete, geolocation for automatic local weather, severe weather alerts, and historical weather data. The app is built with React and styled with Tailwind CSS for a responsive design that works across all devices. It integrates with the OpenWeatherMap API for reliable weather data and uses local storage to save user preferences and recently searched locations.'
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
      featured: false,
      longDescription: 'This real-time chat application enables seamless communication between users through both private and group conversations. Features include real-time messaging using Socket.io, user authentication and profiles, private one-on-one chats, group chat creation and management, file and image sharing, read receipts, typing indicators, emoji support, and message search functionality. The application is built with the MERN stack, using React for the frontend interface, Node.js and Express for the backend API, MongoDB for data storage, and Socket.io for real-time communication. The UI is responsive and works well on both desktop and mobile devices.'
    },
    {
      id: 7,
      title: 'Blog Platform',
      description: 'A feature-rich blogging platform with markdown support, categories, and user comments.',
      image: 'https://placehold.co/600x400/14b8a6/ffffff?text=Blog+Platform',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Markdown'],
      category: 'Full Stack',
      demoLink: 'https://blog-platform.mehedi.dev',
      codeLink: 'https://github.com/mehedi/blog-platform',
      featured: false,
      longDescription: 'This blogging platform provides content creators with a modern, feature-rich environment for publishing articles. The platform includes a WYSIWYG editor with Markdown support, image uploads and management, category and tag organization, SEO optimization tools, social media sharing, user comments with moderation, author profiles, and analytics for tracking post performance. Built with the MERN stack, it uses React for the frontend, Node.js and Express for the backend API, and MongoDB for storing posts, users, and comments. The platform is designed to be fast, responsive, and user-friendly for both content creators and readers.'
    },
    {
      id: 8,
      title: 'Portfolio Generator',
      description: 'A tool for developers to create professional portfolios without coding knowledge.',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Portfolio+Generator',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'DaisyUI'],
      category: 'Frontend',
      demoLink: 'https://portfolio-generator.mehedi.dev',
      codeLink: 'https://github.com/mehedi/portfolio-generator',
      featured: false,
      longDescription: 'This portfolio generator helps developers create professional portfolio websites without extensive coding. Users can choose from multiple templates, customize colors and typography, add projects with descriptions and images, include skills and experience sections, and integrate contact forms. The tool features a live preview as changes are made, and generates a deployable website package or provides direct deployment to GitHub Pages or Netlify. Built with React and styled with Tailwind CSS and DaisyUI, it uses Firebase for authentication and storing user data and portfolio configurations. The generated portfolios are responsive and optimized for all devices.'
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pt-20">
      {selectedProject ? (
        <div className="section-container">
          <button 
            onClick={closeProjectDetails} 
            className="btn btn-outline mb-6"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Projects
          </button>
          
          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure className="h-80">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">
                {selectedProject.title}
                {selectedProject.featured && (
                  <div className="badge badge-primary">Featured</div>
                )}
              </h2>
              <div className="badge badge-accent">{selectedProject.category}</div>
              
              <div className="divider"></div>
              
              <p className="text-lg">{selectedProject.longDescription}</p>
              
              <h3 className="text-xl font-bold mt-6 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map(tech => (
                  <div key={tech} className="badge badge-outline p-3">{tech}</div>
                ))}
              </div>
              
              <div className="card-actions justify-end mt-6">
                <a 
                  href={selectedProject.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  <i className="fab fa-github mr-2"></i> View Code
                </a>
                <a 
                  href={selectedProject.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="section-container">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Explore my recent work and technical projects</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline'}`}
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
                  className="card bg-base-100 shadow-xl overflow-hidden card-hover"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <figure className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 badge badge-primary">Featured</div>
                    )}
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">
                      {project.title}
                      <div className="badge badge-accent">{project.category}</div>
                    </h3>
                    <p className="text-base-content/80">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="badge badge-outline">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="badge badge-outline">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className="card-actions justify-end mt-4">
                      <button 
                        onClick={() => openProjectDetails(project)} 
                        className="btn btn-outline btn-sm"
                      >
                        View Details
                      </button>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="section-container bg-base-200">
            <h2 className="section-title">Project Statistics</h2>
            <div className="stats shadow mx-auto flex flex-col md:flex-row">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <i className="fas fa-code text-3xl"></i>
                </div>
                <div className="stat-title">Total Projects</div>
                <div className="stat-value text-primary">{projects.length}</div>
                <div className="stat-desc">Completed projects</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <i className="fas fa-star text-3xl"></i>
                </div>
                <div className="stat-title">Featured</div>
                <div className="stat-value text-secondary">{projects.filter(p => p.featured).length}</div>
                <div className="stat-desc">Highlighted projects</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-accent">
                  <i className="fas fa-laptop-code text-3xl"></i>
                </div>
                <div className="stat-title">Technologies</div>
                <div className="stat-value text-accent">
                  {new Set(projects.flatMap(p => p.technologies)).size}
                </div>
                <div className="stat-desc">Unique technologies used</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
