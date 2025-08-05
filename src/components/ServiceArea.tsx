import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serving All of Maryland
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve homeowners throughout Maryland with fast, reliable roofing and window services
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Primary Service Areas
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Baltimore
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Annapolis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Frederick
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Rockville
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Columbia
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Silver Spring
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Gaithersburg
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Towson
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Don't see your city? We serve the entire state of Maryland. Call us to confirm service in your area.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Area Coverage</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Baltimore County</span>
                  <span className="text-green-600 font-semibold">✓ Full Coverage</span>
                </div>
                <div className="flex justify-between">
                  <span>Anne Arundel County</span>
                  <span className="text-green-600 font-semibold">✓ Full Coverage</span>
                </div>
                <div className="flex justify-between">
                  <span>Montgomery County</span>
                  <span className="text-green-600 font-semibold">✓ Full Coverage</span>
                </div>
                <div className="flex justify-between">
                  <span>Prince George's County</span>
                  <span className="text-green-600 font-semibold">✓ Full Coverage</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791234.1239740755!2d-77.4726315!3d39.0458315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sMaryland%2C%20USA!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HCS Roofing & Windows Service Area - Maryland"
              ></iframe>
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold text-gray-900">Response Time</div>
              <div className="text-xs text-gray-600">Usually within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;