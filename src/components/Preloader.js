import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const [fadingOut, setFadingOut] = useState(false);
  const [gone, setGone] = useState(false);
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setFadingOut(true);
        setTimeout(() => {
          setGone(true);
          if (onComplete) onComplete();
        }, 600);
      },
    });

    // Animate the preloader elements
    tl.fromTo(
      logoRef.current,
      { scale: 3, opacity: 0, filter: 'blur(20px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        textRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );

    // Counter animation
    let count = { val: 0 };
    gsap.to(count, {
      val: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(count.val) + '%';
        }
      },
    });

    // Force complete after 3.5s
    const forceTimer = setTimeout(() => {
      tl.progress(1);
    }, 3500);

    return () => clearTimeout(forceTimer);
  }, [onComplete]);

  if (gone) return null;

  return (
    <div
      ref={wrapperRef}
      className={`preloader ${fadingOut ? 'preloader-fadeout' : ''}`}
    >
      <div className="preloader-content">
        <div className="preloader-logo" ref={logoRef}>
          <div className="preloader-logo-circle">
            <span>K</span>
          </div>
        </div>
        <div className="preloader-line" ref={lineRef} />
        <div className="preloader-text" ref={textRef}>
          <span className="preloader-brand">ODD KIND</span>
          <span className="preloader-tagline">STRATEGIC MARKETING</span>
        </div>
      </div>
      <div className="preloader-counter" ref={counterRef}>
        0%
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
};

export default Preloader;
