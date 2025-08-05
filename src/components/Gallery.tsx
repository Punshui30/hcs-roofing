import React from 'react';

const Gallery: React.FC = () => {
  const projects = [
    {
      before: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
      after: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      title: "Complete Roof Replacement",
      location: "Baltimore, MD"
    },
    {
      before: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg",
      after: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      title: "Storm Damage Repair",
      location: "Annapolis, MD"
    },
    {
      before: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      after: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "Window Installation",
      location: "Frederick, MD"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recent Projects Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the quality of our work through real before-and-after photos from recent Maryland projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={project.before}
                      alt={`${project.title} - Before`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={project.after}
                      alt={`${project.title} - After`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to transform your home?</p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;