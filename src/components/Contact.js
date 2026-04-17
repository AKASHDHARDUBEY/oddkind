import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', business: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-glow"></div>
      <div className="contact-content">
        <div className="contact-header section-animate">
          <h2 className="contact-title text-reveal">LET'S BUILD SOMETHING</h2>
          <p className="contact-subtitle">
            Ready to transform your brand? Let's talk strategy.
          </p>
        </div>

        <div className="contact-container section-animate">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email Us</h4>
                <p>hello@oddkind.in</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4>Find Us</h4>
                <p>Assam, India</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="contact-social-links">
                <a href="https://instagram.com/oddkind" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/oddkind" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/oddkind" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="contact-name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="contact-email"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  id="contact-phone"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="business"
                  placeholder="Business Name"
                  value={formData.business}
                  onChange={handleChange}
                  id="contact-business"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                id="contact-message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" id="contact-submit">
              <span>Send Message</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
