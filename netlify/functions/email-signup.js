const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { email } = data;

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Valid email address required' })
      };
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Send notification to business
    const notificationEmail = {
      from: process.env.SMTP_USER,
      to: 'contact@hcsroof.com',
      subject: 'New Email Signup - Maintenance Guide',
      html: `
        <h2>New Email Newsletter Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> Maintenance Guide Signup</p>
        <hr>
        <p><small>Signed up from HCS Roofing website</small></p>
      `
    };

    // Send welcome email with maintenance guide
    const welcomeEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Welcome! Your Free Roof Maintenance Guide',
      html: `
        <h2>Welcome to HCS Roofing & Windows!</h2>
        <p>Thank you for subscribing to our newsletter. You'll receive valuable roofing tips and seasonal maintenance reminders.</p>
        
        <h3>Your Free Maintenance Guide Includes:</h3>
        <ul>
          <li>Monthly roof inspection checklist</li>
          <li>Gutter cleaning and maintenance</li>
          <li>Seasonal preparation tips</li>
          <li>When to call a professional</li>
          <li>Energy efficiency improvements</li>
        </ul>
        
        <p>Need immediate roofing assistance? Contact us:</p>
        <p><strong>Phone:</strong> (410) 746-7225</p>
        <p><strong>Email:</strong> contact@hcsroof.com</p>
        
        <p>Best regards,<br>
        The HCS Roofing & Windows Team</p>
        
        <hr>
        <p><small>You can unsubscribe at any time by replying to this email.</small></p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(welcomeEmail)
    ]);

    // Track email signup
    console.log('Email signup:', { email });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed' 
      })
    };

  } catch (error) {
    console.error('Email signup error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: 'Failed to process signup'
      })
    };
  }
};
