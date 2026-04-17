import React from 'react';

const Different = () => {
  return (
    <section className="different-section" id="different">
      <div className="different-content">
        <div className="different-header section-animate">
          <div className="different-title-box">
            <h2 className="different-title text-reveal">
              HOW WE ARE<br />DIFFERENT
            </h2>
          </div>
        </div>

        <div className="different-body">
          <div className="different-left section-animate">
            <div className="different-quotes">
              <p className="different-quote-bold">
                WE DON'T ASK, "WHAT SHOULD WE UPLOAD TODAY?"
              </p>
              <p className="different-quote-bold">
                WE ASK, "WHAT WILL MAKE YOUR CUSTOMER CHOOSE YOU TODAY?"
              </p>
            </div>

            <div className="different-work-blends section-animate">
              <h3 className="work-blends-title">
                <span className="wb-our">OUR</span>{' '}
                <span className="wb-work">WORK</span>
                <br />
                <span className="wb-blends">BLENDS</span>
              </h3>
              <div className="work-blends-icon">
                <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M30 5c-8 8-15 20-10 35 2 6 8 12 15 15" />
                  <path d="M30 5c8 8 15 20 10 35-2 6-8 12-15 15" />
                  <circle cx="30" cy="55" r="3" fill="currentColor" />
                </svg>
              </div>
              <ul className="work-blends-list">
                <li className="section-animate">Strategic clarity</li>
                <li className="section-animate">Creative depth</li>
                <li className="section-animate">Operational execution</li>
              </ul>
            </div>
          </div>

          <div className="different-right section-animate">
            <div className="different-focus">
              <p className="focus-bold">
                Most agencies focus on posts.<br />
                We focus on progress.
              </p>
              <p className="focus-italic">
                This three-layer approach gives you the kind of marketing
                typically offered by big-city <strong>MNCs</strong> but tailored for your
                market, your audience, and your growth path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
