import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-bold">Benjamin Mweri Baya</h1>
        </div>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${menuOpen ? "block" : "hidden"
            } md:block absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 items-center md:items-start">
            <li className="md:inline-block">
              <a href="#about" className="block px-4 py-2 hover:text-gray-400">
                About
              </a>
            </li>
            <li className="md:inline-block">
              <a href="#skills" className="block px-4 py-2 hover:text-gray-400">
                Skills
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="#projects"
                className="block px-4 py-2 hover:text-gray-400"
              >
                Projects
              </a>
            </li>
            <li className="md:inline-block">
              <a
                href="#contact"
                className="block px-4 py-2 hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
