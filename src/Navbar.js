import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using react-router for navigation

const Navbar = () => {
  return (
    <nav className="bg-[#193366] p-4 shadow-md border-b-8 border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Early Conceptions of Race</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/History" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
            Construction of Race
          </Link>
          <Link to="/Racism" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
            Harvard's contribution to Race
          </Link>
          <Link to="/Conclusion" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
          Race and the Myth of Scientific Objectivity
          </Link>
        </div>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            // Implement menu toggle functionality as needed
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu, hidden by default */}
      <div className="md:hidden">
        <div className="flex flex-col space-y-2 mt-2">
          <Link to="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/History" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
            Construction of Race
          </Link>
          <Link to="/Racism" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
          Harvard's contribution to Race
          </Link>
          <Link to="/conclusion" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
          Race and the Myth of Scientific Objectivity
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;