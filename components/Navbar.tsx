import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-corporate-blue text-white text-xs sm:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-4">
             <span className="flex items-center gap-1"><Phone size={14}/> +91-120-6148000</span>
             <span className="hidden sm:flex items-center gap-1"><Mail size={14}/> info@k3m.co.in</span>
          </div>
          <div className="font-semibold tracking-wide">
            ISO 9001:2015 Certified
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
             {/* Logo Placeholder - Text based for now based on PDF header */}
            <div>
              <h1 className="text-2xl font-bold text-corporate-blue tracking-tighter">K3M</h1>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Industries LLP</p>
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-300 mx-2"></div>
            <div className="hidden md:block">
              <p className="text-xs text-corporate-red font-bold">3M Authorized Convertor</p>
              <p className="text-[10px] text-gray-500">Traffic Safety & Graphics</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-corporate-blue border-b-2 border-corporate-blue' 
                    : 'text-gray-600 hover:text-corporate-blue hover:bg-gray-50 px-2 py-1 rounded'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-corporate-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-corporate-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};