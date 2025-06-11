import React, { useState } from "react";
import { Link } from "react-router-dom";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={littlelemon_logo} 
              alt="Little Lemon Restaurant Logo" 
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-8">
              {['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="px-2 pt-2 pb-4 space-y-2">
            {['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase().replace(' ', '')}`} 
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;