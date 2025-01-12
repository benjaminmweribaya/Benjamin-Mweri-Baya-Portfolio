import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">© 2025 Benjamin Mweri Baya. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="https://github.com/benjaminmweribaya"
            className="hover:text-gray-400 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/benjamin-mweri-baya"
            className="hover:text-gray-400 text-sm"
          >
            LinkedIn
          </a>
          <a href="https://x.com/B3njaminBaya" className="hover:text-gray-400 text-sm">
            X
          </a>
          <a
            href="https://instagram.com/benjaminmweribaya"
            className="hover:text-gray-400 text-sm"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/benjaminmweribaya"
            className="hover:text-gray-400 text-sm"
          >
            Facebook
          </a>
          <a
            href="https://t.me/benjaminmweribaya"
            className="hover:text-gray-400 text-sm"
          >
            Telegram
          </a>
          <a
            href="https://www.tiktok.com/@benjaminmweribaya"
            className="hover:text-gray-400 text-sm"
          >
            TikTok
          </a>
          <a
            href="https://www.youtube.com/@benjaminmweribaya"
            className="hover:text-gray-400 text-sm"
          >
            YouTube
          </a>
          <a href="https://wa.me/+254783797132" className="hover:text-gray-400 text-sm">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

