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
    <header className="bg-indigo-950">
      <div className="mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to='/'>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <span className="text-2xl font-bold text-white">ASGF</span>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
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
              className="group text-white bg-orange-500 shadow-sm shadow-white border border-orange-600 font-medium px-10 py-3 rounded-full transition-all duration-300 hover:bg-orange-600 hover:border-transparent"
            >
              {" "}
              GET INVOLVED{" "}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t p-4 border-gray-900 mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-orange-500 font-medium"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
               <Link
                to="/purpose"
                className="text-white hover:text-orange-500 font-medium"
                onClick={closeMobileMenu}
              >
                OUR PURPOSE
              </Link>
               <Link
                to="/parttnership"
                className="text-white hover:text-orange-500 font-medium"
                onClick={closeMobileMenu}
              >
                PARTNERSHIPS
              </Link>
               <Link
                to="/sponsor"
                className="text-white hover:text-orange-500 font-medium"
                onClick={closeMobileMenu}
              >
                SPONSORSHIP
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-orange-500 font-medium"
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
              
              <Link
                to="/contact"
                className="text-white hover:text-orange-500 font-medium"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium mt-4"
                onClick={closeMobileMenu}
              >
                GET INVOLVED
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
