import React from 'react';
import { MapPin, Phone, Star, Home, Wrench, AppWindow as Window } from 'lucide-react';
import { useContact } from '../context/ContactContext';

interface ServiceAreaPageProps {
  city: string;
  county: string;
  zipCodes: string[];
  landmarks: string[];
}

const ServiceAreaPage: React.FC<ServiceAreaPageProps> = ({ city, county, zipCodes, landmarks }) => {
  const { openModal } = useContact();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Roofing & Window Services in {city}, MD
            </h1>
            <p className="text-xl text-slate-200 mb-6 max-w-3xl mx-auto">
              Licensed Maryland roofing contractor serving {city} and {county} with premium roof replacements, repairs, and window installations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
              >
                Get Free {city} Roof Inspection
              </button>
              <a 
                href="tel:+1-410-746-7225"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors duration-200"
              >
                Call Now: (410) 746-7225
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Roofing & Window Services in {city}, Maryland
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving homeowners throughout {city}, {county}, and surrounding areas with expert craftsmanship and unbeatable warranties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Home className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Roof Replacement {city}</h3>
              <p className="text-gray-600 mb-6">
                Complete roof replacement services for {city} homes. Premium materials, expert installation, full warranty coverage.
              </p>
              <button
                onClick={openModal}
                className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200"
              >
                Get {city} Roof Quote
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Wrench className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Roof Repair {city}</h3>
              <p className="text-gray-600 mb-6">
                Fast, reliable roof repairs in {city}. Storm damage, leaks, missing shingles - we fix it all with lasting solutions.
              </p>
              <button
                onClick={openModal}
                className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200"
              >
                Schedule {city} Repair
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Window className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Window Installation {city}</h3>
              <p className="text-gray-600 mb-6">
                Energy-efficient window replacements for {city} homeowners. Professional installation, multiple styles available.
              </p>
              <button
                onClick={openModal}
                className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200"
              >
                Get {city} Window Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose HCS Roofing for Your {city} Home?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local {city} Expertise</h3>
                    <p className="text-gray-600">We understand {city}'s unique weather patterns and building requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Licensed Maryland Contractor</h3>
                    <p className="text-gray-600">Fully licensed and insured for all roofing and window work in {county}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Response Times</h3>
                    <p className="text-gray-600">Quick response for {city} emergency repairs and free inspections</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Areas We Serve Near {city}
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="h-4 w-4 text-emerald-600 mr-2" />
                    <span className="text-gray-700">{landmark}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Zip Codes Served:</h4>
                <p className="text-gray-600">{zipCodes.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Protect Your {city} Home?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Get your free roof inspection and estimate from {city}'s trusted roofing contractor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Schedule Free {city} Inspection
            </button>
            <a 
              href="tel:+1-410-746-7225"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors duration-200"
            >
              Call (410) 746-7225
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Individual city components
export const PasadenaPage: React.FC = () => (
  <ServiceAreaPage
    city="Pasadena"
    county="Anne Arundel County"
    zipCodes={['21122', '21123']}
    landmarks={['Lake Shore', 'Riviera Beach', 'Pasadena Business District', 'Bodkin Point']}
  />
);

export const AnnapolisPage: React.FC = () => (
  <ServiceAreaPage
    city="Annapolis"
    county="Anne Arundel County"
    zipCodes={['21401', '21402', '21403', '21404', '21405', '21409']}
    landmarks={['Naval Academy', 'Historic Downtown', 'Eastport', 'West Annapolis', 'Parole']}
  />
);

export const GlenBurniePage: React.FC = () => (
  <ServiceAreaPage
    city="Glen Burnie"
    county="Anne Arundel County"
    zipCodes={['21060', '21061']}
    landmarks={['Marley Station Mall', 'BWI Airport Area', 'Ferndale', 'Linthicum']}
  />
);

export const SevernaPage: React.FC = () => (
  <ServiceAreaPage
    city="Severna Park"
    county="Anne Arundel County"
    zipCodes={['21146']}
    landmarks={['Severna Park High School', 'B&A Trail', 'Kinder Farm Park', 'Round Bay']}
  />
);

export const LaurelPage: React.FC = () => (
  <ServiceAreaPage
    city="Laurel"
    county="Prince George's County"
    zipCodes={['20707', '20708', '20723', '20724']}
    landmarks={['Laurel Park', 'Main Street', 'Montpelier Mansion', 'Patuxent Research Refuge']}
  />
);

export const SilverSpringPage: React.FC = () => (
  <ServiceAreaPage
    city="Silver Spring"
    county="Montgomery County"
    zipCodes={['20901', '20902', '20903', '20904', '20905', '20906', '20910']}
    landmarks={['Downtown Silver Spring', 'Takoma Park', 'Four Corners', 'Wheaton']}
  />
);

export const EllicottCityPage: React.FC = () => (
  <ServiceAreaPage
    city="Ellicott City"
    county="Howard County"
    zipCodes={['21041', '21042', '21043']}
    landmarks={['Historic Main Street', 'Patapsco Valley State Park', 'Centennial Park', 'Columbia']}
  />
);

export default ServiceAreaPage;