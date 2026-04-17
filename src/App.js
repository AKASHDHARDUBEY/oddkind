import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

import Hero from './components/Hero';
import ScrollCanvas from './components/ScrollCanvas';
import About from './components/About';
import Clients from './components/Clients';
import Services from './components/Services';
import Team from './components/Team';
import Different from './components/Different';
import WhyOddKind from './components/WhyOddKind';
import VisionMission from './components/VisionMission';
import Process from './components/Process';
import Contact from './components/Contact';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import MagneticButton from './components/MagneticButton';
import SmoothSlider from './components/SmoothSlider';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each section on scroll
      gsap.utils.toArray('.section-animate').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 20%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate service cards with stagger
      gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Animate team members
      gsap.utils.toArray('.team-member').forEach((member, i) => {
        gsap.fromTo(
          member,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: member,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Parallax effect on hero
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Client logos animation
      gsap.utils.toArray('.client-logo-card').forEach((logo, i) => {
        gsap.fromTo(
          logo,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: logo,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Process steps animation
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Horizontal text reveal
      gsap.utils.toArray('.text-reveal').forEach((text) => {
        gsap.fromTo(
          text,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: text,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Vision Mission cards
      gsap.utils.toArray('.vm-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.85, rotateY: i === 0 ? -15 : 15 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Different section title
      gsap.fromTo(
        '.different-title-box',
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.different-title-box',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Thank you text animation
      gsap.utils.toArray('.thankyou-line').forEach((line, i) => {
        gsap.fromTo(
          line,
          { opacity: 0, x: 100, skewX: -10 },
          {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: i * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Why OddKind quote animation
      gsap.utils.toArray('.why-quote-line').forEach((line, i) => {
        gsap.fromTo(
          line,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Why OddKind feature items
      gsap.utils.toArray('.why-feature-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Cinematic Preloader */}
      {!preloaderDone && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <div className="App" ref={appRef}>
        {/* Navigation Bar */}
        <nav className="navbar" id="navbar">
          <MagneticButton strength={0.2}>
            <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="nav-logo-circle">
                <span>K</span>
              </div>
              <span className="nav-brand-name">ODD KIND</span>
            </div>
          </MagneticButton>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
            <MagneticButton strength={0.4}>
              <button className="nav-login-btn" onClick={() => setAuthOpen(true)} id="nav-login">
                <i className="fas fa-user"></i>
                <span>Login</span>
              </button>
            </MagneticButton>
          </div>
        </nav>

        <Hero />
        <ScrollCanvas />
        <About />
        <SmoothSlider />
        <Clients />
        <Services />
        <WhyOddKind />
        <Team />
        <Different />
        <VisionMission />
        <Process />
        <Contact />
        <FooterCTA />
        <Footer />

        {/* Auth Modal */}
        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      </div>
    </>
  );
}

export default App;
