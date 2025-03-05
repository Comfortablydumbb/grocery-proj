import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  useEffect(() => {
    const getCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };
    
    getCartCount();
    // Listen for storage events to update cart count
    window.addEventListener('storage', getCartCount);
    
    return () => window.removeEventListener('storage', getCartCount);
  }, []);

  // Detect scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-green-50 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-green-600 font-bold text-xl">फ्रेशBazar</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">Shop</Link>
              <Link to="/orders" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">My Orders</Link>
            </div>
          </div>

          {/* Right navigation - Cart and Account */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-green-600 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-green-600">
              <User className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="text-gray-700 hover:text-green-600 relative mr-4">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/orders" 
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              My Orders
            </Link>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
