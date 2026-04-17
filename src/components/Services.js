import React from 'react';

const servicesData = [
  {
    title: 'Brand Films & Ad Production',
    description: 'Concept to final cut. Built to convert.',
    icon: '🎬',
  },
  {
    title: 'Social Media Management',
    description: 'Content that builds trust and drives action.',
    icon: '📱',
  },
  {
    title: 'Performance Marketing',
    description: 'Ads, funnels, and lead systems that deliver.',
    icon: '📈',
  },
  {
    title: 'Shoot Planning & Direction',
    description: 'No wasted frames. Every shot has a purpose.',
    icon: '🎯',
  },
  {
    title: 'Offline & Print Media',
    description: 'Hoardings, newspapers, flyers — planned with intent.',
    icon: '🖨️',
  },
  {
    title: 'Growth & Business Consulting',
    description: 'Founder-level strategy for brands ready to scale.',
    icon: '🚀',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-gradient-bg"></div>
      <div className="services-content">
        <div className="services-header section-animate">
          <h2 className="services-title text-reveal">Our Services</h2>
          <div className="services-tagline">
            <p>We don't sell services.</p>
            <p>We build solutions.</p>
          </div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-glow"></div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
