import React, { useEffect, useRef } from 'react';

const ScrollProgress = () => {
  const fillRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (fillRef.current) {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = (window.scrollY / scrollHeight) * 100;
          fillRef.current.style.width = `${scrolled}%`;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-fill" ref={fillRef} />
    </div>
  );
};

export default ScrollProgress;
