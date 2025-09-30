import React, { useState, useEffect } from 'react';
import './Contact.css';
import { loadContactData } from '../utils/portfolioData.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactData, setContactData] = useState(null);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open user's email client with prefilled details
    const to = contactData?.email || '';
    const subject = encodeURIComponent(formData.subject || '');
    const bodyLines = [
      formData.message || '',
      '',
      `— ${formData.name || ''} (${formData.email || ''})`
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setIsMessageSent(true);
  };

  const handleSendAnother = () => {
    setIsMessageSent(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadContactData();
        setContactData(data);
      } catch (error) {
        console.error('Error loading contact data:', error);
        setContactData(null);
      }
    };
    loadData();
  }, []);

  if (!contactData) {
    return (
      <footer id="contact" className="contact">
        <div className="container">
          <p>Loading contact data...</p>
        </div>
      </footer>
    );
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: contactData.email,
      link: `mailto:${contactData.email}`
    },
    {
      icon: "📱",
      title: "Phone",
      value: contactData.phone,
      link: `tel:${contactData.phone}`
    },
    {
      icon: "📍",
      title: "Location",
      value: contactData.location,
      link: "https://www.google.com/maps/search/Amherst,+MA"
    }
  ];

  return (
    <footer id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{contactData.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{contactData.subtitle}</h3>
            <p>
              {contactData.description}
            </p>
            <div className="contact-methods">
              {contactInfo && contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-method"
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="social-links">
              <a href={contactData.github} className="social-link" target="_blank" rel="noopener noreferrer">
                <span>🐙</span>
                GitHub
              </a>
              <a href={contactData.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                <span>💼</span>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            {!isMessageSent ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <span>📤</span>
                  Send Message
                </button>
              </form>
            ) : (
              <div className="message-sent">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Your email client should have opened with your message ready to send.</p>
                <button onClick={handleSendAnother} className="btn btn-outline">
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ayush Gupta. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
