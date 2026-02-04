import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">K3M Industries LLP</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              We are a leading Authorized Convertor of 3M India Ltd. specializing in the design, manufacture, and installation of Road Safety Signboards, Smart Road Furniture, and Variable Messaging Signs.
            </p>
            <div className="flex items-center gap-2 mb-2">
                <span className="bg-white text-corporate-red text-xs font-bold px-2 py-1 rounded">3M Partner</span>
                <span className="bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded">ISO 9001:2015</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products & Solutions', path: '/products' },
                { name: 'Project Portfolio', path: '/projects' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center text-sm">
                    <ChevronRight size={14} className="mr-1" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 flex-shrink-0" /> Reflective Signages</li>
              <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 flex-shrink-0" /> Smart Road Furniture</li>
              <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 flex-shrink-0" /> Variable Messaging Signs</li>
              <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 flex-shrink-0" /> Vehicle Markings</li>
              <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 flex-shrink-0" /> Solar Luminaires</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-corporate-yellow" />
                <span>C-190, Block C, Sector 63,<br/>Noida, Uttar Pradesh 201309</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-corporate-yellow" />
                <span>+91-120-6148000</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-corporate-yellow" />
                <span>info@k3m.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} K3M Industries LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};