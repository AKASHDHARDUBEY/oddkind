import React from 'react';

const FooterCTA = () => {
  return (
    <section className="footer-cta-section" id="footer-cta">
      <div className="footer-cta-content">
        <h2 className="footer-cta-title section-animate">
          Ready for a Different Kind of Growth?
        </h2>
        <p className="footer-cta-subtitle section-animate">
          Let's build something that actually moves your business.
        </p>

        <div className="footer-cta-buttons section-animate">
          <a href="#contact" className="cta-btn-primary" id="cta-start-conversation">
            <span>Start a Conversation →</span>
            <div className="cta-btn-glow" />
          </a>
          <a href="#services" className="cta-btn-outline" id="cta-see-work">
            See Our Work
          </a>
        </div>

        <div className="footer-cta-contact section-animate">
          <a href="tel:+916000458259" className="cta-contact-item">
            <span className="cta-contact-icon">📞</span>
            <span>60004-58259</span>
          </a>
          <span className="cta-contact-divider">|</span>
          <a href="mailto:official@oddkind.in" className="cta-contact-item">
            <span className="cta-contact-icon">✉</span>
            <span>official@oddkind.in</span>
          </a>
          <span className="cta-contact-divider">|</span>
          <a href="https://instagram.com/odd_kind_official" target="_blank" rel="noopener noreferrer" className="cta-contact-item">
            <span className="cta-contact-icon">📸</span>
            <span>@odd_kind_official</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
