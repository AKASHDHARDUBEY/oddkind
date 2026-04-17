import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconsRef = useRef(null);
  const logoRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const bodyTextRef = useRef(null);
  const scrollPromptRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1 }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        '-=0.5'
      )
      // Staggered fade-up for scrollytelling hero lines
      .fromTo(
        line1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.4'
      )
      .fromTo(
        line2Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.5'
      )
      .fromTo(
        bodyTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        scrollPromptRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      )
      .fromTo(
        '.social-icon',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        '.floating-element',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
        '-=0.4'
      );

      // Continuous floating animations
      gsap.to('.floating-element', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      });

      // Logo pulse
      gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef} id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        {/* Logo in top right */}
        <div className="hero-logo" ref={logoRef}>
          <div className="logo-circle">
            <span className="logo-k">K</span>
          </div>
        </div>

        {/* Main Title with elements */}
        <div className="hero-title-container" ref={titleRef}>
          <div className="hero-title-wrapper">
            {/* Floating marketing elements */}
            <div className="floating-elements-container">
              <div className="floating-element fe-globe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className="floating-element fe-camera">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 2H8.5L6.5 5H2v15h20V5h-4.5L15.5 2zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
                </svg>
              </div>
              <div className="floating-element fe-film">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                </svg>
              </div>
              <div className="floating-element fe-megaphone">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2v20l-8-4H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8l8-4zm-2 4.27L14 8.54V15.46l4 2.27V6.27zM4 8v8h8V8H4z"/>
                </svg>
              </div>
            </div>

            <h1 className="hero-title">
              <span className="title-odd">ODD</span>
              <span className="title-space"> </span>
              <span className="title-kind">KIND</span>
            </h1>

            {/* Social icons scattered around title */}
            <div className="social-icons-scattered" ref={iconsRef}>
              <div className="social-icon si-x">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="social-icon si-instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div className="social-icon si-facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="social-icon si-threads">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.02.88-.726 2.08-1.14 3.476-1.2.975-.042 1.889.058 2.737.3.012-.638-.034-1.223-.138-1.742-.268-1.34-.807-2.13-1.88-2.293-.737-.112-1.467.1-2.057.597-.352.298-.57.657-.65 1.073l-2.1-.37c.156-.836.58-1.575 1.226-2.143.952-.838 2.2-1.252 3.515-1.166 1.642.107 2.863.92 3.427 2.283.338.816.482 1.828.428 3.009v.147c1.4.692 2.465 1.676 3.063 2.903.845 1.733.893 4.488-1.203 6.54-1.81 1.771-4.016 2.56-7.149 2.582zM10.811 15.15c-.028.523.207.98.66 1.274.562.365 1.3.534 2.095.495 1.065-.057 1.9-.443 2.481-1.148.389-.47.675-1.084.86-1.837a8.718 8.718 0 00-1.985-.235c-.952.04-1.747.274-2.301.676-.486.353-.782.795-.81 1.276z"/>
                </svg>
              </div>
              <div className="social-icon si-google">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollytelling Hero Lines */}
        <div className="scrolly-hero-lines">
          <h2 className="scrolly-hero-line-1" ref={line1Ref}>
            We Don't Make Ads.
          </h2>
          <h2 className="scrolly-hero-line-2" ref={line2Ref}>
            We Make People Stop Scrolling.
          </h2>
          <p className="scrolly-hero-body" ref={bodyTextRef}>
            ODD KIND — Full-Stack Strategic Marketing & Consulting
          </p>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle" ref={subtitleRef}>
          A Full-Stack Strategic Marketing & Consulting Agency.
        </p>

        {/* Scroll prompt */}
        <div className="scroll-indicator" ref={scrollPromptRef}>
          <span className="scroll-prompt-text">Scroll to See How ↓</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
