import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-500">Get in touch with our expert team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-corporate-blue">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 text-corporate-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Head Office & Works</h3>
                  <p className="mt-2 text-gray-600">
                    C-190, Block C, Sector 63,<br />
                    Noida, Gautam Buddha Nagar,<br />
                    Uttar Pradesh, 201309
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-corporate-red">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4 text-corporate-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                  <p className="mt-2 text-gray-600 font-medium">+91-120-6148000</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Sat, 9am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-corporate-yellow">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                  <p className="mt-2 text-gray-600">info@k3m.co.in</p>
                  <p className="text-gray-600">sanjeev@k3m.co.in</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none" placeholder="+91" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none" placeholder="you@company.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select id="subject" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none">
                  <option>Project Inquiry</option>
                  <option>Product Information</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-corporate-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-xl h-96 overflow-hidden shadow-lg border border-gray-300 relative group">
           <img 
            src="https://placehold.co/1200x600/e5e7eb/1f2937?text=Map+Location:+Noida+Sector+63" 
            alt="Location Map" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition">
             <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
               <MapPin size={32} className="mx-auto mb-2 text-corporate-red" />
               <p className="font-bold text-gray-900">Noida, Sector 63</p>
               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">View on Google Maps</a>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};