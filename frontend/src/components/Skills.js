import React from 'react';

const Skills = () => {
  const skills = [
    "React", 
    "JavaScript", 
    "Node.js", 
    "HTML", 
    "CSS", 
    "Tailwind CSS", 
    "Express", 
    "Git", 
    "MongoDB", 
    "MySQL", 
    "SQLite",
    "PostgreSQL", 
    "Python", 
    "Django", 
    "Bottle",
    "Flask", 
    "FastAPI",
    "Bootstrap",
    "REST API",
    "Wordpress",
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-yellow-100 text-center rounded-lg shadow-md">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
