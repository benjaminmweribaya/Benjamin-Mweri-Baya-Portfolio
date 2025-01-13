import React from 'react';

const projects = [
  {
    title: "Becof Web App",
    description: "An E-Commerce React-based platform with educational content and farming resources.",
    github: "https://github.com/benjaminmweribaya/becof-web-app",
    liveDemo: "https://becof-web-app.vercel.app",
  },
  {
    title: "Reading Tracker CLI",
    description: "A CLI tool for managing book collections and tracking reading progress.",
    github: "https://github.com/benjaminmweribaya/CLI-based-Reading-Tracker-Application",
  },
  {
    title: "Eco Home Guide",
    description: "A user-friendly guide to eco-friendly home improvements.",
    github: "https://github.com/benjaminmweribaya/eco-home-guide-app",
    liveDemo: "https://eco-home-guide-app.vercel.app",
  },
  {
    title: "Movie Character Explorer",
    description: "This is a single-page application built using HTML, CSS, and JavaScript that allows users to explore and search for movie characters through a public API.",
    github: "https://github.com/benjaminmweribaya/movie-character-explorer",
    liveDemo: "https://benjaminmweribaya.github.io/movie-character-explorer"
  },
  {
    title: "Textile Waste Recycling App",
    description: "A React application that facilitates donations and collections of pre-owned items and offers a marketplace for eco-friendly products made from waste materials like plastics, glass, and textile scraps.",
    github: "https://github.com/benjaminmweribaya/textile-waste-recycling-app",
    liveDemo: "https://textile-waste-recycling-app.vercel.app"
  },
  {
    title: "Turkana Tech Youths Hub",
    description: "A donation React-based website for Turkana Tech Youths Hub CBO, that allows users to donate to various causes in the Turkana region through a user-friendly interface.",
    github: "https://github.com/benjaminmweribaya/turkana-tech-youths-hub",
    liveDemo: "https://www.turkanatechyouthshub.com"
  }
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
