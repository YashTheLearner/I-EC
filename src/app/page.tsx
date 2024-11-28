'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode by adding/removing the class on the body
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    // Initialize dark mode based on system preference or previous setting
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference) {
      setIsDarkMode(darkModePreference === 'true');
      if (darkModePreference === 'true') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    // Store the dark mode setting in localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Innovations@EC Logo" className="w-[190px] " />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-yellow-500 font-semibold">Home</Link>
          <Link href="/about" className="hover:text-yellow-500 font-semibold">About Us</Link>
          <Link href="/events" className="hover:text-yellow-500 font-semibold">Events</Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button className="hover:text-yellow-500 font-semibold">More</button>
            <ul className="absolute hidden bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 shadow-md mt-2 rounded-lg space-y-2 w-40 group-hover:block">
              <li><Link href="/projects" className="block px-4 py-2 text-sm">Projects</Link></li>
              <li><Link href="/resources" className="block px-4 py-2 text-sm">Resources</Link></li>
              <li><Link href="/team" className="block px-4 py-2 text-sm">Team</Link></li>
              <li><Link href="/contact" className="block px-4 py-2 text-sm">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600">Join Us</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600">Login</button>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-gray-800 dark:text-white hover:text-yellow-500"
          >
            {isDarkMode ? '🌙' : '🌞'}
          </button>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <div className="space-y-2">
            <div className="w-6 h-1 bg-gray-800 dark:bg-white"></div>
            <div className="w-6 h-1 bg-gray-800 dark:bg-white"></div>
            <div className="w-6 h-1 bg-gray-800 dark:bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md mt-4 rounded-lg p-4 space-y-4">
          <Link href="/" className="block text-gray-800 dark:text-white font-semibold">Home</Link>
          <Link href="/about" className="block text-gray-800 dark:text-white font-semibold">About Us</Link>
          <Link href="/events" className="block text-gray-800 dark:text-white font-semibold">Events</Link>
          <Link href="/projects" className="block text-gray-800 dark:text-white font-semibold">Projects</Link>
          <Link href="/resources" className="block text-gray-800 dark:text-white font-semibold">Resources</Link>
          <Link href="/team" className="block text-gray-800 dark:text-white font-semibold">Team</Link>
          <Link href="/contact" className="block text-gray-800 dark:text-white font-semibold">Contact Us</Link>
          <button className="bg-yellow-500 text-white w-full py-2 rounded-lg font-semibold hover:bg-yellow-600">Join Us</button>
          <button className="bg-blue-500 text-white w-full py-2 rounded-lg font-semibold hover:bg-blue-600">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
