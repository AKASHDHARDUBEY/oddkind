import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-overlay"></div>
      <div className="about-content section-animate">
        <div className="about-header">
          <h2 className="about-title text-reveal">
            <span className="highlight-red">ODD KIND</span> IS A FULL-STACK STRATEGIC
            MARKETING & CONSULTING AGENCY
          </h2>
        </div>

        <p className="about-description section-animate">
          built for brands that want more than posters, reels, and
          generic "digital marketing."
        </p>

        <div className="about-film-strip section-animate">
          <div className="film-strip">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="film-frame"></div>
            ))}
          </div>
        </div>

        <p className="about-tagline section-animate">
          The kind that changes how a business is experienced, remembered, and chosen.
        </p>
      </div>
    </section>
  );
};

export default About;
