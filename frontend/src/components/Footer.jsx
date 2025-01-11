import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 Benjamin Mweri Baya. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/benjaminmweribaya" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/benjamin-mweri-baya" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://x.com/B3njaminBaya" className="hover:text-gray-400">X</a>
          <a href="https://instagram.com/benjaminmweribaya" className="hover:text-gray-400">Instagram</a>
          <a href="https://facebook.com/benjaminmweribaya" className="hover:text-gray-400">Facebook</a>
          <a href="https://t.me/benjaminmweribaya" className="hover:text-gray-400">Telegram</a>
          <a href="https://www.tiktok.com/@benjaminmweribaya" className="hover:text-gray-400">TikTok</a>
          <a href="https://www.youtube.com/@benjaminmweribaya" className="hover:text-gray-400">YouTube</a>
          <a href="https://wa.me/+254783797132" className="hover:text-gray-400">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
