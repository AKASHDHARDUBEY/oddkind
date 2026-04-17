import React from 'react';

const features = [
  "Strategy Before Creativity",
  "Production-Ready Team",
  "Northeast India's New-Age Agency",
];

const WhyOddKind = () => {
  return (
    <section className="why-oddkind-section section-animate" id="why-oddkind">
      <div className="why-oddkind-content">
        <div className="why-oddkind-left">
          <blockquote className="why-oddkind-quote">
            <span className="why-quote-line">Most agencies ask what to post.</span>
            <span className="why-quote-line">We ask what will make your</span>
            <span className="why-quote-line why-quote-accent">customer choose you.</span>
          </blockquote>
        </div>

        <div className="why-oddkind-right">
          <h3 className="why-oddkind-heading section-animate">Why ODD KIND</h3>
          <div className="why-oddkind-features">
            {features.map((feature, index) => (
              <div key={index} className="why-feature-item section-animate">
                <div className="why-feature-bar" />
                <span className="why-feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOddKind;
