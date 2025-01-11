import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 Benjamin Baya. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/your-profile" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" className="hover:text-gray-400">LinkedIn</a>
          {/* Add other social media links */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
