import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-indigo-950 md:bg-transparent">
      <div className="mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <span className="text-2xl font-bold text-white">ASGF</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-500 font-medium">HOME</a>
            <a href="#" className="text-white hover:text-orange-500 font-medium">OUR PURPOSE</a>
            <a href="#" className="text-white hover:text-orange-500 font-medium">PARTNERSHIPS</a>
            <a href="#" className="text-white hover:text-orange-500 font-medium">SPONSORSHIP</a>
            <a href="#" className="text-white hover:text-orange-500 font-medium">ABOUT</a>
            <a href="#" className="text-white hover:text-orange-500 font-medium">CONTACT</a>
            <a href="#" className="group text-white bg-gradient-to-r from-blue-900 to-orange-400 border border-orange-400 font-medium px-10 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:from-orange-500 hover:to-orange-500 hover:border-transparent"> GET INVOLVED </a>
        </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-orange-500 text-xl"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t p-4 border-gray-900 mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-orange-500 font-medium" onClick={closeMobileMenu}>HOME</a>
              <a href="#" className="text-white hover:text-orange-500 font-medium" onClick={closeMobileMenu}>ABOUT</a>
              <a href="#" className="text-white hover:text-orange-500 font-medium" onClick={closeMobileMenu}>AFFILIATES</a>
              <a href="#" className="text-white hover:text-orange-500 font-medium" onClick={closeMobileMenu}>PLANS</a>
              <a href="#" className="text-white hover:text-orange-500 font-medium" onClick={closeMobileMenu}>BLOG</a>
              <a href="#" className="text-white hover:text-orange-500 font-medium" onClick={closeMobileMenu}>CONTACT</a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium mt-4" onClick={closeMobileMenu}>
                JOIN US
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;