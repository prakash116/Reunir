import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-indigo-950">
        <div className="mx-auto px-10 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to='/' onClick={closeMobileMenu}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <span className="text-2xl font-bold text-white">ASGF</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/home"
                className="text-white hover:text-orange-500 font-medium"
              >
                HOME
              </Link>
              <Link
                to="/purpose"
                className="text-white hover:text-orange-500 font-medium"
              >
                OUR PURPOSE
              </Link>
              <Link
                to="/parttnership"
                className="text-white hover:text-orange-500 font-medium"
              >
                PARTNERSHIPS
              </Link>
              <Link
                to="/sponsor"
                className="text-white hover:text-orange-500 font-medium"
              >
                SPONSORSHIP
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-orange-500 font-medium"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-orange-500 font-medium"
              >
                CONTACT
              </Link>
              <Link
                to="/involved"
                className="group text-white bg-gradient-to-r from-blue-900 to-orange-400 border border-orange-400 font-medium px-10 py-3 rounded-full transition-all duration-300 hover:bg-orange-500 hover:from-orange-500 hover:to-orange-500 hover:border-transparent"
              >
                GET INVOLVED
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-orange-500 text-xl"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Fixed positioned overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-indigo-950 z-50 overflow-auto">
          <div className="p-4">
            {/* Close button at top */}
            <div className="flex justify-between items-center mb-8">
              <Link to='/' onClick={closeMobileMenu}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  <span className="text-2xl font-bold text-white">ASGF</span>
                </div>
              </Link>
              <button
                className="text-orange-500 text-xl"
                onClick={closeMobileMenu}
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-6">
              <Link
                to="/home"
                className="text-white hover:text-orange-500 font-medium text-lg py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
              <Link
                to="/purpose"
                className="text-white hover:text-orange-500 font-medium text-lg py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                OUR PURPOSE
              </Link>
              <Link
                to="/parttnership"
                className="text-white hover:text-orange-500 font-medium text-lg py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                PARTNERSHIPS
              </Link>
              <Link
                to="/sponsor"
                className="text-white hover:text-orange-500 font-medium text-lg py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                SPONSORSHIP
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-orange-500 font-medium text-lg py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-orange-500 font-medium text-lg py-3 border-b border-gray-800"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
              <Link
                to="/involved"
                className="text-white bg-gradient-to-r from-blue-900 to-orange-400 border border-orange-400 font-medium px-6 py-4 rounded-full text-center hover:bg-orange-500 hover:from-orange-500 hover:to-orange-500 hover:border-transparent transition-all duration-300 mt-4 text-lg"
                onClick={closeMobileMenu}
              >
                GET INVOLVED
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;