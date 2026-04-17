import React from 'react';

const teamData = [
  {
    name: 'APARNA SINGHA',
    role: 'CREATIVE HEAD',
    gradient: 'linear-gradient(135deg, #c62828 0%, #1a1a2e 100%)',
    icon: '✏️',
  },
  {
    name: 'RAJA SINGH',
    role: 'OPERATIONS HEAD',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #c62828 100%)',
    icon: '🎯',
  },
  {
    name: 'ROHAN DEORI',
    role: 'PRODUCTION HEAD',
    gradient: 'linear-gradient(135deg, #c62828 0%, #880e4f 100%)',
    icon: '🎬',
  },
  {
    name: 'PRETILATA SIKDAR',
    role: 'FINANCE HEAD',
    gradient: 'linear-gradient(135deg, #880e4f 0%, #c62828 100%)',
    icon: '💼',
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-bg"></div>
      <div className="team-content">
        <div className="team-header section-animate">
          <h2 className="team-title text-reveal">MEET OUR CORE TEAM</h2>
          <div className="team-title-underline"></div>
        </div>

        <div className="team-grid">
          {teamData.map((member, index) => (
            <div key={index} className="team-member">
              <div
                className="team-member-image"
                style={{ background: member.gradient }}
              >
                <div className="team-member-icon">{member.icon}</div>
                <div className="team-member-shine"></div>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-note section-animate">
          <p>
            Along with our core team, we work with a curated network of
            specialists—designers, strategists, filmmakers, and industry
            experts—who join projects based on the skillset required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
