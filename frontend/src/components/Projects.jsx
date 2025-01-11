import React from 'react';

const projects = [
  {
    title: "Becof Web App",
    description: "A React-based platform for sustainable farming resources and community.",
    github: "https://github.com/your-repo/becof-web-app",
    liveDemo: "#",
  },
  {
    title: "Reading Tracker CLI",
    description: "A CLI tool for managing book collections and tracking reading progress.",
    github: "https://github.com/your-repo/reading-tracker-cli",
    liveDemo: "#",
  },
  // Add other projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <br />
              <a href={project.liveDemo} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
