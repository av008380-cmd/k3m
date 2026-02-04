import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Signage', 'Furniture', 'Technology', 'Lighting'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
       <div className="bg-corporate-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Our Solutions</h1>
          <p className="mt-4 text-xl text-blue-100">Innovative products for modern road infrastructure</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-corporate-red text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{product.description}</p>
                <button className="w-full bg-gray-100 text-gray-800 font-semibold py-2 rounded hover:bg-corporate-blue hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical List */}
        <div className="mt-20 bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 border-b pb-4">Comprehensive Product List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                    <li>Hot Thermoplastic Road Lane Indicator & Paints</li>
                    <li>Crash Barriers</li>
                    <li>Over Gantry and Cantilever Signboards</li>
                    <li>Shoulder Mounted Place Identifications</li>
                    <li>Map type Advance Direction Signboards</li>
                    <li>Regulatory, cautionary, mandatory & prohibitory Signboards</li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                    <li>Backlit Signboards (Conventional as well as LEDs)</li>
                    <li>Road Furniture (RPM, Median Marker, AFP, Delineators)</li>
                    <li>Traffic Safety Furniture (Cones, Rumble Strips)</li>
                    <li>Internal & External LED Base Backlit signs</li>
                    <li>Passive & Active Signs</li>
                    <li>Digital Variable Messaging Signs</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};