import React from 'react';

const VisionMission = () => {
  return (
    <section className="vm-section" id="vision-mission">
      <div className="vm-content">
        <h2 className="vm-title section-animate text-reveal">
          OUR VISION<br />AND MISSION
        </h2>

        <div className="vm-cards">
          <div className="vm-card vm-vision section-animate">
            <h3 className="vm-card-title">VISION</h3>
            <p className="vm-card-text">
              To redefine how Northeast India thinks about marketing by creating
              a new era of growth, creativity, and strategic transformation
            </p>
          </div>

          <div className="vm-card vm-mission section-animate">
            <h3 className="vm-card-title">MISSION</h3>
            <p className="vm-card-text">
              To empower local and regional brands from the Northeast to compete
              confidently on national and global stages through premium, full-stack
              marketing and business strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
