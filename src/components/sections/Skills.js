import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, icon: 'fab fa-react', category: 'Frontend' },
    { name: 'Node.js', level: 90, icon: 'fab fa-node-js', category: 'Backend' },
    { name: 'MongoDB', level: 85, icon: 'fas fa-database', category: 'Database' },
    { name: 'Express', level: 88, icon: 'fas fa-server', category: 'Backend' },
    { name: 'JavaScript', level: 92, icon: 'fab fa-js', category: 'Language' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5', category: 'Frontend' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 88, icon: 'fab fa-css3', category: 'Frontend' },
    { name: 'Firebase', level: 80, icon: 'fas fa-fire', category: 'Backend' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt', category: 'Tools' },
    { name: 'RESTful API', level: 90, icon: 'fas fa-exchange-alt', category: 'Backend' },
    { name: 'React Router', level: 92, icon: 'fas fa-route', category: 'Frontend' }
  ];

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [visibleSkills, setVisibleSkills] = React.useState(skills);

  React.useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleSkills(skills);
    } else {
      setVisibleSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="section-container bg-base-200" id="skills">
      <h2 className="section-title animate__animated animate__fadeInDown">My Skills</h2>
      <p className="section-subtitle animate__animated animate__fadeIn animate__delay-1s">Technologies and tools I work with</p>
      
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
        {visibleSkills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
          >
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 animate__animated animate__tada animate__delay-2s">
                  <i className={`${skill.icon} text-2xl text-primary`}></i>
                </div>
                <div>
                  <h3 className="card-title">{skill.name}</h3>
                  <span className="badge badge-primary">{skill.category}</span>
                </div>
              </div>
              
              <div className="w-full bg-base-300 rounded-full h-2.5">
                <div 
                  className="skill-level bg-primary h-2.5 rounded-full animate__animated animate__slideInLeft"
                  style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1 + 1}s` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Proficiency</span>
                <span className="animate__animated animate__fadeIn" style={{ animationDelay: `${index * 0.1 + 1.5}s` }}>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
