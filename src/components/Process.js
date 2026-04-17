import React from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Deep Dive',
    description:
      'We start by understanding your business inside-out — your model, audience, competitors, and growth gaps.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Strategy Blueprint',
    description:
      'A clear, actionable marketing and brand roadmap tailored to your goals and budget.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Creative Execution',
    description:
      'From content production to campaign design — we bring strategy to life with premium creatives.',
    icon: '🎨',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description:
      'Campaigns go live. We continuously test, optimize, and refine for maximum ROI.',
    icon: '🚀',
  },
  {
    number: '05',
    title: 'Scale & Sustain',
    description:
      'Once the system works, we help you scale it — expanding reach, channels, and revenue streams.',
    icon: '📊',
  },
];

const Process = () => {
  return (
    <section className="process-section" id="process">
      <div className="process-content">
        <div className="process-header section-animate">
          <h2 className="process-title text-reveal">HOW WE WORK</h2>
          <p className="process-subtitle">
            A proven system, not guesswork.
          </p>
        </div>

        <div className="process-timeline">
          <div className="timeline-line"></div>
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`process-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}
            >
              <div className="step-connector">
                <div className="step-dot">
                  <span className="step-number">{step.number}</span>
                </div>
              </div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
