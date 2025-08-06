import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to set these up
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  timeframe: string;
  message: string;
}

export interface LeadMagnetData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
}

export interface EmailCaptureData {
  email: string;
}

export const sendContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      timeframe: formData.timeframe,
      message: formData.message,
      to_email: 'contact@hcsroof.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Contact form sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};

export const sendLeadMagnet = async (formData: LeadMagnetData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      property_type: formData.propertyType || 'Not specified',
      lead_type: 'Free Roofing Guide Download',
      to_email: 'contact@hcsroof.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'lead_magnet_template', // You'll need a separate template for lead magnets
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Lead magnet sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending lead magnet:', error);
    return false;
  }
};

export const sendEmailCapture = async (formData: EmailCaptureData): Promise<boolean> => {
  try {
    const templateParams = {
      from_email: formData.email,
      signup_type: 'Newsletter Signup - Maintenance Guide',
      to_email: 'contact@hcsroof.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'email_signup_template', // You'll need a separate template for email signups
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email signup successful:', response);
    return true;
  } catch (error) {
    console.error('Error with email signup:', error);
    return false;
  }
};
