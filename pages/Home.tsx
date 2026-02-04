import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Lightbulb, Map, Camera, Upload } from 'lucide-react';
import { CLIENTS, PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  // State for customizable images on Home page
  const [heroImage, setHeroImage] = useState("https://placehold.co/1920x1080/1e3a8a/FFFFFF?text=High+Quality+Road+Infrastructure+Background");
  const [aboutImage, setAboutImage] = useState("https://placehold.co/800x600/f3f4f6/1e3a8a?text=Factory+Operations+%26+Manufacturing");
  const [featuredImages, setFeaturedImages] = useState<Record<string, string>>({});

  const handleHeroUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setHeroImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAboutUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setAboutImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleFeaturedUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFeaturedImages(prev => ({...prev, [id]: URL.createObjectURL(e.target.files![0])}));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 group">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img 
            src={heroImage}
            alt="Highway Infrastructure" 
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        
        {/* Hero Image Edit Button */}
        <label className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-lg cursor-pointer transition opacity-0 group-hover:opacity-100 border border-white/30">
          <div className="flex items-center gap-2">
            <Camera size={20} />
            <span className="text-sm font-medium">Change Background</span>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handleHeroUpload} />
        </label>

        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
          <div className="sm:w-2/3">
            <div className="inline-block bg-corporate-red text-white text-sm font-bold px-3 py-1 rounded mb-4">
              3M AUTHORIZED CONVERTOR
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
              Complete Solution For <br/> <span className="text-corporate-yellow">Road Safety</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Specializing in Retro Reflective Signboards, Smart VMS, and Road Furniture. We deliver world-class infrastructure safety solutions across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-white text-corporate-blue font-bold px-8 py-4 rounded hover:bg-gray-100 transition shadow-lg flex items-center justify-center">
                Explore Products
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-corporate-blue pl-4">
                About K3M Industries LLP
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Formerly known as KRM INFRA, K3M Industries LLP is a premier entity in the business of manufacturing and system integration of Retro Reflective Signboards, High Mast Signposts, Backlit boards, Smart VMS, and Road Furniture.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a leading <strong>Authorized Convertor of 3M India Ltd.</strong>, we serve National Highways, Expressways, State PWDs, and Smart Cities with ISO 9001 certified quality standards.
              </p>
              <Link to="/about" className="text-corporate-blue font-semibold flex items-center hover:underline">
                Read our full story <ArrowRight size={16} className="ml-2"/>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
              <img src={aboutImage} alt="Factory Operations" className="w-full h-full object-cover" />
              
              {/* About Image Edit Button */}
              <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition">
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                  <Camera size={18} />
                  <span>Change Photo</span>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={handleAboutUpload} />
              </label>

              <div className="absolute bottom-0 left-0 bg-corporate-blue text-white p-6 w-3/4 rounded-tr-lg pointer-events-none">
                <p className="font-bold text-xl">100+ Major Projects</p>
                <p className="text-sm opacity-80">Executed across Pan-India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-gray-500">Our commitment to quality sets us apart in the infrastructure industry.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-corporate-red">
              <ShieldCheck size={40} className="text-corporate-red mb-4" />
              <h3 className="text-xl font-bold mb-2">3M Authorized</h3>
              <p className="text-gray-600 text-sm">Access to industry-leading materials and technologies directly from 3M.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-corporate-blue">
              <Map size={40} className="text-corporate-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Pan-India Presence</h3>
              <p className="text-gray-600 text-sm">Successfully executed projects in various states with understanding of local regulations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-corporate-yellow">
              <Truck size={40} className="text-corporate-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">In-House Manufacturing</h3>
              <p className="text-gray-600 text-sm">State-of-the-art plant in Noida with advanced CNC, plotting, and printing machinery.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-green-600">
              <Lightbulb size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Solutions</h3>
              <p className="text-gray-600 text-sm">Pioneering in Smart Road Furniture and Next-Gen Variable Messaging Signs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Offerings</h2>
              <p className="mt-2 text-gray-500">Comprehensive range of road safety products.</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-corporate-blue font-semibold hover:underline">
              View All Products <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="group relative rounded-lg overflow-hidden shadow-lg h-80">
                <img 
                  src={featuredImages[product.id] || product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Upload Button */}
                <label className="absolute top-4 right-4 z-20 bg-white/90 text-gray-800 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition shadow hover:bg-white">
                   <Upload size={16} />
                   <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFeaturedUpload(product.id, e)} />
                </label>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-3">{product.description}</p>
                  <span className="text-corporate-yellow text-sm font-semibold flex items-center">
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
                <Link to="/products" className="absolute inset-0 z-10"></Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to="/products" className="inline-flex items-center text-corporate-blue font-semibold hover:underline">
              View All Products <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Marquee (Simulated) */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Prestigious Clientele</h2>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex space-x-12 px-4">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div key={index} className="flex-shrink-0 bg-white px-8 py-4 rounded shadow-sm border border-gray-200">
                <span className="text-lg font-bold text-gray-600 uppercase tracking-wider">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-corporate-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Building Safer Roads for a Better Future</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for consultations on road safety infrastructure, signage planning, and smart city integrations.
          </p>
          <Link to="/contact" className="inline-block bg-white text-corporate-blue font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
};