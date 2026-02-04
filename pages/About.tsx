import React, { useState } from 'react';
import { CheckCircle, Award, Target, Eye, Camera } from 'lucide-react';

export const About: React.FC = () => {
  // State for infrastructure gallery images
  const [infraImages, setInfraImages] = useState([
    { id: 'latex', title: "Latex Printing", src: "https://placehold.co/600x400/e5e7eb/1f2937?text=Latex+Printing+Unit" },
    { id: 'plotter', title: "Graphtec Plotter", src: "https://placehold.co/600x400/e5e7eb/1f2937?text=Plotter+Machine" },
    { id: 'cnc', title: "CNC Router", src: "https://placehold.co/600x400/e5e7eb/1f2937?text=CNC+Router+Machine" },
    { id: 'yard', title: "Fabrication Yard", src: "https://placehold.co/600x400/e5e7eb/1f2937?text=Fabrication+Yard" },
  ]);

  const handleInfraImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const newSrc = URL.createObjectURL(file);
      const newImages = [...infraImages];
      newImages[index].src = newSrc;
      setInfraImages(newImages);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-xl text-gray-500">Driving Innovation in Road Safety Infrastructure</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-600 max-w-none mb-16">
          <p className="text-lg leading-relaxed">
            <strong>K3M Industries LLP</strong> (Formerly Known as KRM INFRA) is engaged in the business of manufacturing and system integration of Retro Reflective Signboards, High Mast Signpost, Backlit boards, Smart VMS, and Road Furniture (RPM, Median Marker & Delineator) etc.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We are one of the leading <strong>Authorized Convertor of 3M India Ltd.</strong> for design, manufacture and installation of signboards for National Highways, Expressways, State Highways, District Roads, State PWDs, Airports, Townships, Municipalities, Toll Plazas, and Retail outlets of Private companies.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <div className="bg-corporate-blue w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To ensure road safety and enhance traffic management by delivering exceptional traffic signage solutions. We aim to be the preferred choice for our clients by offering innovative, durable, and compliant products that meet their specific requirements.
            </p>
          </div>
          <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
             <div className="bg-corporate-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To revolutionize India's road infrastructure through smart technology and superior quality materials, creating safer journeys for millions of commuters every day while building long-term partnerships based on trust and reliability.
            </p>
          </div>
        </div>

        {/* Differentiators */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Key Differentiators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "3M Authorized Converter", desc: "Access to industry-leading materials and technologies. Ensures top-quality products meeting international standards." },
               { title: "Pan-India Presence", desc: "Strong presence across India. Successfully executed projects in various states with deep understanding of local regulations." },
               { title: "Commitment to Quality", desc: "ISO 9001 Certification. Stringent quality control processes ensuring optimal visibility and durability." }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                 <div className="text-corporate-red mb-4">
                   <Award size={48} />
                 </div>
                 <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                 <p className="text-gray-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Infrastructure Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Infrastructure</h2>
          <p className="mb-8 text-gray-600">
             We have a state-of-the-art Manufacturing Plant at Noida (UP), having imported and indigenous machines capable of manufacturing world-class Digital prints and Signboards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {infraImages.map((item, idx) => (
               <div key={item.id} className="space-y-2 group relative">
                  <div className="relative rounded-lg overflow-hidden shadow-md h-48 bg-gray-200">
                    <img src={item.src} className="w-full h-full object-cover" alt={item.title} />
                    
                    {/* Overlay Upload Button */}
                    <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                      <div className="text-white flex flex-col items-center">
                        <Camera size={24} className="mb-1" />
                        <span className="text-xs font-bold uppercase tracking-wide">Change</span>
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleInfraImageUpload(idx, e)}
                      />
                    </label>
                  </div>
                  <p className="text-sm font-semibold text-center">{item.title}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};