import React from 'react';
import { Home, Wrench, AppWindow as Window } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const Services: React.FC = () => {
  const { openModal } = useContact();

  const services = [
    {
      icon: Home,
      title: "Roof Replacements",
      description: "Complete roof replacement with premium materials and expert installation. We handle everything from permits to cleanup, ensuring your home is protected for decades to come.",
      features: ["Premium materials", "Expert installation", "Full warranty", "Insurance claims assistance"]
    },
    {
      icon: Wrench,
      title: "Roof Repairs",
      description: "Fast, reliable roof repairs to fix leaks, storm damage, and wear. Our experienced team diagnoses problems quickly and provides lasting solutions at competitive prices.",
      features: ["Emergency repairs", "Storm damage", "Leak detection", "Preventive maintenance"]
    },
    {
      icon: Window,
      title: "Window Installations",
      description: "Energy-efficient window replacements that enhance your home's comfort and value. Professional installation with top-quality windows from trusted manufacturers.",
      features: ["Energy efficient", "Multiple styles", "Professional installation", "Improved home value"]
    }
  ];

  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Expert Roofing & Window Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your roofing and window needs, backed by quality craftsmanship and unbeatable warranties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-slate-300">
              <div className="text-center mb-6">
                <service.icon className="h-10 w-10 lg:h-12 lg:w-12 text-slate-600 mx-auto mb-3 lg:mb-4 group-hover:text-slate-700 transition-colors duration-200" />
                <h3 className="text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm lg:text-base text-gray-600">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={openModal}
                className="w-full bg-slate-600 text-white py-3 lg:py-4 rounded-lg text-sm lg:text-base font-semibold hover:bg-slate-700 transition-colors duration-200"
              >
                Get Free Quote
              </button>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-lg p-6 lg:p-8 text-center">
          <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 lg:mb-4">Emergency Roofing Services Available</h3>
          <p className="text-slate-200 mb-6 max-w-3xl mx-auto text-sm lg:text-base">
            Storm damage? Sudden leak? We provide 24/7 emergency roofing services to protect your home when you need it most.
          </p>
          <div className="mb-6 flex flex-wrap justify-center gap-3 lg:gap-6 text-sm lg:text-base">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              <span>Licensed MD Contractor</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              <span>15+ Years Experience</span>
            </div>
          </div>
          <a 
            href="tel:+1-410-746-7225"
            className="inline-block bg-emerald-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
          >
            Call Now: (410) 746-7225
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;