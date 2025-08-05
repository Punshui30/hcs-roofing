import React, { useState } from 'react';
import { Download, FileText, CheckCircle, X } from 'lucide-react';
import { sendLeadMagnet } from '../services/emailService';

interface LeadMagnetProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const success = await sendLeadMagnet(formData);
      
      if (success) {
        // Track lead magnet conversion
        if (typeof window !== 'undefined' && (window as any).trackEvent) {
          (window as any).trackEvent('lead_magnet_conversion', {
            name: formData.name,
            email: formData.email,
            property_type: formData.propertyType
          });
        }
        
        setIsSubmitted(true);
        
        // Auto-close after showing success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', propertyType: '' });
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Lead magnet submission error:', error);
      alert('There was an error processing your request. Please try again or call us at (410) 746-7225.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="bg-emerald-600 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FileText className="h-8 w-8 mr-3" />
              <div>
                <h3 className="text-xl font-bold">Free Roofing Guide</h3>
                <p className="text-emerald-100 text-sm">Complete Homeowner's Checklist</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-emerald-200 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Download Starting!</h4>
            <p className="text-gray-600">
              Check your email for the complete roofing guide and maintenance checklist.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Get Your Free Guide:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• When to replace vs. repair your roof</li>
                <li>• Seasonal maintenance checklist</li>
                <li>• How to spot early warning signs</li>
                <li>• Insurance claim tips and process</li>
                <li>• Material comparison guide</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Property Type (Optional)</option>
                  <option value="single-family">Single Family Home</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="condo">Condominium</option>
                  <option value="commercial">Commercial Property</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-2" />
              {isSubmitting ? 'Sending Guide...' : 'Download Free Guide'}
            </button>
            
            <p className="text-xs text-gray-500 mt-3 text-center">
              We respect your privacy. No spam, just valuable roofing information.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadMagnet;