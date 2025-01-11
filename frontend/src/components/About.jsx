import React from 'react';
import headshot from '../assets/images/headshot.jpg';

const About = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="mb-6 md:mb-0 md:mr-6">
          <img
            src={headshot}
            alt="My headshot"
            className="rounded-full w-40 h-40 object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hello! I am a passionate full-stack software developer with a love for building user-friendly, innovative applications. 
            After completing the rigorous Full-Stack Software Development Bootcamp at Moringa School, I’ve honed my skills 
            in JavaScript, React, Node.js, and Tailwind CSS. I thrive on solving real-world problems through clean, 
            maintainable code and collaborating with teams to bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
