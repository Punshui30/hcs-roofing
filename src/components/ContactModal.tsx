import React, { useState } from 'react';
import { X, Phone, Mail, Clock } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import { sendContactForm } from '../services/emailService';

const ContactModal: React.FC = () => {
  const { isModalOpen, closeModal } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    timeframe: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email notification via EmailJS
      const success = await sendContactForm(formData);
      
      if (success) {
        // Track successful form submission
        if (typeof window !== 'undefined' && (window as any).trackEvent) {
          (window as any).trackEvent('contact_form_submission', {
            service: formData.service,
            timeframe: formData.timeframe
          });
        }
        
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            service: '',
            timeframe: '',
            message: ''
          });
          closeModal();
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // You could show an error message to the user here
      alert('There was an error submitting your form. Please try calling us directly at (410) 746-7225.');
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-slate-800 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Get Your Free Inspection</h2>
              <p className="text-slate-300 mt-1">We'll respond within 24 hours</p>
            </div>
            <button
              onClick={closeModal}
              className="text-white hover:text-slate-300 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              We've received your request and will contact you within 24 hours to schedule your free inspection.
            </p>
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-slate-800 font-semibold">Need immediate assistance?</p>
              <a 
                href="tel:+1-410-746-7225"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Call us now: (410) 746-7225
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Select a service</option>
                  <option value="roof-replacement">Roof Replacement</option>
                  <option value="roof-repair">Roof Repair</option>
                  <option value="window-installation">Window Installation</option>
                  <option value="emergency-repair">Emergency Repair</option>
                  <option value="inspection">General Inspection</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Timeframe
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                >
                  <option value="">Select timeframe</option>
                  <option value="asap">ASAP/Emergency</option>
                  <option value="this-week">This Week</option>
                  <option value="next-week">Next Week</option>
                  <option value="within-month">Within a Month</option>
                  <option value="planning-ahead">Just Planning Ahead</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your project, any specific concerns, or questions you have..."
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6 bg-stone-50 p-4 rounded-lg">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-800">
                  <p className="font-semibold mb-1">What happens next?</p>
                  <ul className="space-y-1 text-slate-700">
                    <li>• We'll review your request and call you within 24 hours</li>
                    <li>• Schedule a convenient time for your free inspection</li>
                    <li>• Provide a detailed, no-obligation estimate</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Book Free Inspection'}
              </button>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">or call now</p>
                  <a 
                    href="tel:+1-410-746-7225"
                    className="flex items-center justify-center text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    (410) 746-7225
                  </a>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;