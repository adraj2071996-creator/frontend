import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('✅ Message sent! We will get back to you within 24 hours.');
    e.target.reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><span className="gradient-text">Contact Us</span></h1>
        <p>Questions, partnerships, or feedback? We would love to hear from you.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Office</h3>
            <p>123 Innovation Drive<br />Tech Park, Bangalore 560001</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <h3>✉️ Email</h3>
            <p>hello@animalhelper.in</p>
          </div>
          <div className="info-card">
            <h3>⏰ Hours</h3>
            <p>Mon – Sat: 9 AM – 7 PM IST</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status && <div className="status-message">{status}</div>}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required placeholder="Rahul Sharma" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required placeholder="rahul@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" required placeholder="How can we help?" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required rows="5" placeholder="Write your message here…"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message 🚀</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
