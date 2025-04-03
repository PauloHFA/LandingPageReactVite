import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold text-gray-900">Liri liri lari la</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-pink-600 transition-colors">
              Coleções
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 transition-colors">
              Sobre Nós
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-1 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Coleções
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-pink-600 hover:text-pink-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;