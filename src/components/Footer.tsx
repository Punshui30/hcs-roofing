import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 text-center md:text-left">
            <div className="mb-4">
              <span className="text-xl font-bold">HCS</span>
              <span className="text-lg text-slate-300 ml-1">Roofing & Windows</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md text-sm">
              Maryland's premier roofing and window replacement contractor. Locally owned, licensed, and insured with over 15 years of experience.
            </p>
            <div className="flex justify-center md:justify-start gap-4 items-center">
              <a 
                href="tel:+1-410-746-7225"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                (410) 746-7225
              </a>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/share/1DfFyDZhck/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-7 w-7" />
                </a>
                <a 
                  href="https://www.instagram.com/h.c.s.baltimore?igsh=MXM4ODJzd2drdDQwMQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3 text-center md:text-left">Contact Info</h3>
            <div className="space-y-2 text-slate-300 text-center md:text-left">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-2 flex-shrink-0" />
                <a href="tel:+1-410-746-7225" className="hover:text-white text-sm">(410) 746-7225</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 mr-2 flex-shrink-0" />
                <a href="mailto:contact@hcsroof.com" className="hover:text-white text-sm">contact@hcsroof.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-3 w-3 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Serving All of Maryland</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                  <div>Sat: 8:00 AM - 4:00 PM</div>
                  <div>24/7 Emergency Service</div>
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
                <div className="flex justify-center md:justify-start gap-3">
                  <a 
                    href="https://www.facebook.com/share/1DfFyDZhck/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/h.c.s.baltimore?igsh=MXM4ODJzd2drdDQwMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3 text-center md:text-left">Services</h3>
            <ul className="space-y-1 text-slate-300 text-center md:text-left">
              <li><a href="#" className="hover:text-white text-sm">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-white text-sm">Roof Repair</a></li>
              <li><a href="#" className="hover:text-white text-sm">Window Installation</a></li>
              <li><a href="#" className="hover:text-white text-sm">Storm Damage Repair</a></li>
              <li><a href="#" className="hover:text-white text-sm">Emergency Service</a></li>
              <li><a href="#" className="hover:text-white text-sm">Free Inspections</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 pt-4">
          <div className="flex flex-col items-center text-center">
            <div className="text-slate-300 text-xs mb-2">
              © 2024 HCS Roofing & Windows. All rights reserved. Licensed Maryland Contractor.
            </div>
            <div className="text-slate-300 text-xs">
              <span>MD License #: 123456</span>
              <span className="mx-2">•</span>
              <span>Fully Insured</span>
              <span className="mx-2">•</span>
              <span>BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;