import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none';
      follower.style.display = 'none';
      return;
    }

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleHoverIn = () => {
      gsap.to(cursor, { scale: 2.5, opacity: 0.8, duration: 0.3 });
      gsap.to(follower, { scale: 2, borderColor: '#A20028', opacity: 0.6, duration: 0.3 });
    };

    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, borderColor: 'rgba(162, 0, 40, 0.3)', opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .service-card, .team-member, .vm-card, .client-logo-card, .nav-login-btn, .cta-btn-primary, .cta-btn-outline'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
};

export default CustomCursor;
