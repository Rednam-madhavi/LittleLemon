import React from "react";
import food1 from "../images/food1.avif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Little Lemon
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold">Chicago</h3>
          <p className="text-lg max-w-lg">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/Booking">
            <button
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
              aria-label="Reserve a table"
            >
              Reserve Table
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="relative hidden md:block">
          <img
            src={food1}
            alt="Mediterranean cuisine"
            className="w-full max-w-md rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition duration-300"
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-yellow-400 rounded-lg z-[-1]"></div>
        </div>
      </section>
    </header>
  );
};

export default Header;