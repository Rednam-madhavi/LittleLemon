import React from "react";
import small_logo from "../images/small_logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={small_logo} 
              alt="Little Lemon Restaurant Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 text-sm">
              Authentic Mediterranean cuisine in the heart of Chicago.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Lemon Street, Chicago, IL</li>
              <li>(312) 555-1234</li>
              <li>contact@littlelemon.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for special offers!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;