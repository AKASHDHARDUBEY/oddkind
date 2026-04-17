import React from 'react';

const clientsData = [
  {
    name: 'PRANISH HEALTHCARE',
    category: 'HEALTHCARE & HOSPITALS',
    description: 'Healthcare marketing & digital growth',
    color: '#00b4d8',
  },
  {
    name: 'ASSAM TEA MACHINERIES',
    category: 'TEA MACHINERIES',
    description: 'Industrial & manufacturing brand positioning',
    color: '#f9a825',
  },
  {
    name: 'RUPALIM REAL ESTATES',
    category: 'REAL ESTATE BRANDS',
    description: 'Project positioning, lead generation, and local visibility',
    color: '#e53935',
  },
  {
    name: 'PEHNAWAA',
    category: 'CLOTHING BRANDS',
    description: 'Fashion & lifestyle branding and content strategy',
    color: '#ab47bc',
  },
];

const Clients = () => {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-content">
        <h2 className="clients-title section-animate text-reveal">
          We have worked with
        </h2>

        <div className="clients-grid">
          {clientsData.map((client, index) => (
            <div key={index} className="client-logo-card">
              <div className="client-logo-icon" style={{ borderColor: client.color }}>
                <span style={{ color: client.color }}>{client.name.charAt(0)}</span>
              </div>
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <h4 className="client-category">{client.category}</h4>
                <p className="client-description">• {client.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="clients-images section-animate">
          <div className="client-image-placeholder">
            <div className="image-overlay">
              <span>Team at Work</span>
            </div>
          </div>
          <div className="client-image-placeholder">
            <div className="image-overlay">
              <span>Our Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
