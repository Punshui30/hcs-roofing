import React from 'react';
import { Shield, Award, Users, MapPin } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section className="py-8 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Maryland's Most Trusted Roofing Contractor
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Locally owned, licensed, and insured with over 15 years of experience serving Maryland homeowners
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Licensed & Insured</h3>
            <p className="text-xs lg:text-sm text-gray-600">Fully licensed Maryland contractor with comprehensive insurance coverage</p>
          </div>
          
          <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <Award className="h-8 w-8 lg:h-10 lg:w-10 text-amber-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Award Winning</h3>
            <p className="text-xs lg:text-sm text-gray-600">Recognized for excellence in craftsmanship and customer service</p>
          </div>
          
          <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <Users className="h-8 w-8 lg:h-10 lg:w-10 text-slate-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">500+ Happy Customers</h3>
            <p className="text-xs lg:text-sm text-gray-600">Trusted by homeowners across Maryland for quality workmanship</p>
          </div>
          
          <div className="text-center p-4 lg:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <MapPin className="h-8 w-8 lg:h-10 lg:w-10 text-stone-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">Locally Owned</h3>
            <p className="text-xs lg:text-sm text-gray-600">Maryland-based company serving our local community with pride</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
          <div className="grid grid-cols-3 gap-6 lg:gap-8 text-center mb-6 lg:mb-8">
            <div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-2">15+</div>
              <div className="text-sm lg:text-base text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-2">4.9★</div>
              <div className="text-sm lg:text-base text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-2">24/7</div>
              <div className="text-sm lg:text-base text-gray-600">Emergency Service</div>
            </div>
          </div>
          
          <div className="p-3 sm:p-4 bg-stone-50 rounded-lg">
            <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-2 text-center">
              What Our Customers Say
            </h3>
            <div className="text-center mb-3">
              <div className="flex justify-center items-center mb-2">
                <span className="text-lg font-bold text-amber-500">4.9</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">Based on 127+ verified reviews</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <blockquote className="text-xs sm:text-sm text-gray-700 italic">
                "HCS Roofing replaced our entire roof after storm damage. Professional, on-time, and the quality exceeded our expectations. Highly recommend!"
                <footer className="mt-1 text-xs text-gray-600">- Sarah M., Baltimore</footer>
              </blockquote>
              <blockquote className="text-xs sm:text-sm text-gray-700 italic">
                "Fair pricing, excellent workmanship, and they cleaned up everything perfectly. Our new windows look amazing and have already reduced our energy bills."
                <footer className="mt-1 text-xs text-gray-600">- Mike R., Annapolis</footer>
              </blockquote>
            </div>
            
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white p-2 rounded-lg">
                <div className="text-sm font-bold text-emerald-600">A+ Rating</div>
                <div className="text-sm text-gray-600">Better Business Bureau</div>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <div className="text-sm font-bold text-emerald-600">Top Rated</div>
                <div className="text-sm text-gray-600">Angie's List 2024</div>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <div className="text-sm font-bold text-emerald-600">5-Star</div>
                <div className="text-sm text-gray-600">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;