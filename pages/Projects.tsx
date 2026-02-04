import React, { useState } from 'react';
import { COMPLETED_PROJECTS, ONGOING_PROJECTS } from '../constants';
import { CheckCircle, Clock, Upload, X } from 'lucide-react';

export const Projects: React.FC = () => {
  // Initial placeholder images so the site isn't empty
  const [projectImages, setProjectImages] = useState<string[]>([
    "https://placehold.co/600x400/1e3a8a/FFF?text=Highway+Construction+Site",
    "https://placehold.co/600x400/1e3a8a/FFF?text=Gantry+Installation",
    "https://placehold.co/600x400/1e3a8a/FFF?text=Signage+Project",
    "https://placehold.co/600x400/1e3a8a/FFF?text=Road+Marking",
    "https://placehold.co/600x400/1e3a8a/FFF?text=Safety+Barriers"
  ]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProjectImages(prev => [imageUrl, ...prev]);
    }
  };

  const removeImage = (index: number) => {
    setProjectImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-900 py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Project Portfolio</h1>
        <p className="text-xl text-gray-400">Trusted by India's leading infrastructure developers</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Completed Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="text-green-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Completed Projects</h2>
          </div>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Project Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Concessionaire</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {COMPLETED_PROJECTS.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.concessionaire}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 italic text-right">* Showing 10 of 50+ major completed projects</p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="text-corporate-blue" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Ongoing Projects</h2>
          </div>
          <div className="overflow-x-auto shadow-md rounded-lg border border-blue-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider">Project Name</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider">Concessionaire</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ONGOING_PROJECTS.map((project) => (
                  <tr key={project.id} className="hover:bg-blue-50/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.concessionaire}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Image Gallery */}
        <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Project Gallery</h2>
              <label className="flex items-center gap-2 bg-corporate-blue text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-800 transition">
                <Upload size={20} />
                <span>Add Site Photo</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((imgSrc, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg aspect-video bg-gray-100">
                        <img 
                            src={imgSrc} 
                            alt={`Project Site ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                         <button 
                            onClick={() => removeImage(i)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                            title="Remove photo"
                          >
                            <X size={16} />
                          </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-semibold">Site Documentation {i+1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};