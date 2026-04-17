import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const SmoothSlider = () => {
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);
  const slidesRef = useRef([]);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const maxScrollRef = useRef(0);
  const rafRef = useRef(null);
  const isActiveRef = useRef(false);

  const ease = 0.075;

  const slides = [
    {
      title: 'Pranish Healthcare',
      category: 'Healthcare & Wellness',
      color: '#2E7D32',
      emoji: '🏥',
      desc: 'Complete brand identity & digital marketing strategy',
    },
    {
      title: 'Assam Tea Machineries',
      category: 'Industrial Manufacturing',
      color: '#5D4037',
      emoji: '🏭',
      desc: 'B2B marketing transformation & lead generation',
    },
    {
      title: 'Rupalim Real Estates',
      category: 'Real Estate & Property',
      color: '#1565C0',
      emoji: '🏢',
      desc: 'Premium positioning & performance campaigns',
    },
    {
      title: 'Pehnawaa',
      category: 'Fashion & Lifestyle',
      color: '#AD1457',
      emoji: '👗',
      desc: 'E-commerce branding & social media growth',
    },
    {
      title: 'Brand Strategy',
      category: 'Core Service',
      color: '#c62828',
      emoji: '🎯',
      desc: 'Strategic clarity that drives real business outcomes',
    },
    {
      title: 'Social Media',
      category: 'Digital Presence',
      color: '#E65100',
      emoji: '📱',
      desc: 'Content that converts, not just entertains',
    },
    {
      title: 'Performance',
      category: 'Data-Driven Growth',
      color: '#6A1B9A',
      emoji: '📊',
      desc: 'ROI-focused campaigns with measurable impact',
    },
    {
      title: 'Consulting',
      category: 'Business Growth',
      color: '#00695C',
      emoji: '💼',
      desc: 'End-to-end business strategy & execution',
    },
  ];

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const updateScaleAndPosition = useCallback(() => {
    slidesRef.current.forEach((slide) => {
      if (!slide) return;
      const rect = slide.getBoundingClientRect();
      const centerPosition = (rect.left + rect.right) / 2;
      const distanceFromCenter = centerPosition - window.innerWidth / 2;

      let scale, offsetX;
      if (distanceFromCenter > 0) {
        scale = Math.min(1.5, 1 + distanceFromCenter / window.innerWidth);
        offsetX = (scale - 1) * 200;
      } else {
        scale = Math.max(0.6, 1 - Math.abs(distanceFromCenter) / window.innerWidth);
        offsetX = 0;
      }

      gsap.set(slide, { scale, x: offsetX });
    });
  }, []);

  const update = useCallback(() => {
    currentRef.current = lerp(currentRef.current, targetRef.current, ease);

    if (wrapperRef.current) {
      gsap.set(wrapperRef.current, { x: -currentRef.current });
    }

    updateScaleAndPosition();
    rafRef.current = requestAnimationFrame(update);
  }, [updateScaleAndPosition]);

  useEffect(() => {
    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;
    if (!slider || !wrapper) return;

    // Calculate max scroll from wrapper width
    const calcMaxScroll = () => {
      maxScrollRef.current = wrapper.scrollWidth - slider.offsetWidth;
    };
    calcMaxScroll();

    // Intersection Observer to only run animation when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isActiveRef.current) {
            isActiveRef.current = true;
            rafRef.current = requestAnimationFrame(update);
          }
        } else {
          isActiveRef.current = false;
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(slider);

    const handleWheel = (e) => {
      // Check if slider is in view
      const rect = slider.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && maxScrollRef.current > 0) {
        // Only hijack scroll when in the slider's viewport area
        const sliderCenterY = (rect.top + rect.bottom) / 2;
        const viewportCenter = window.innerHeight / 2;
        const distFromCenter = Math.abs(sliderCenterY - viewportCenter);

        if (distFromCenter < window.innerHeight * 0.5) {
          // If we reached the ends, allow normal scrolling
          const isAtStartAndScrollingUp = targetRef.current <= 0 && e.deltaY < 0;
          const isAtEndAndScrollingDown = targetRef.current >= maxScrollRef.current && e.deltaY > 0;
          
          if (isAtStartAndScrollingUp || isAtEndAndScrollingDown) {
            return; // Let browser scroll vertically naturally
          }

          e.preventDefault();
          targetRef.current += e.deltaY;
          targetRef.current = Math.max(0, targetRef.current);
          targetRef.current = Math.min(maxScrollRef.current, targetRef.current);
        }
      }
    };

    const handleResize = () => {
      calcMaxScroll();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return (
    <section className="smooth-slider-section" id="showcase">
      <div className="smooth-slider-header section-animate">
        <h2 className="smooth-slider-title text-reveal">Our Work</h2>
        <p className="smooth-slider-subtitle">
          Scroll to explore our projects & services
        </p>
        <div className="smooth-slider-hint">
          <span className="hint-arrow">←</span>
          <span>Scroll to browse</span>
          <span className="hint-arrow">→</span>
        </div>
      </div>

      <div className="smooth-slider" ref={sliderRef}>
        <div className="smooth-slider-wrapper" ref={wrapperRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="smooth-slide"
              ref={(el) => (slidesRef.current[index] = el)}
            >
              <div
                className="smooth-slide-inner"
                style={{
                  '--slide-color': slide.color,
                }}
              >
                <div className="smooth-slide-bg">
                  <span className="smooth-slide-emoji">{slide.emoji}</span>
                </div>
                <div className="smooth-slide-content">
                  <span className="smooth-slide-category">{slide.category}</span>
                  <h3 className="smooth-slide-title">{slide.title}</h3>
                  <p className="smooth-slide-desc">{slide.desc}</p>
                </div>
                <div className="smooth-slide-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="smooth-slider-progress">
        <div className="smooth-slider-progress-track">
          <div className="smooth-slider-progress-fill" />
        </div>
      </div>
    </section>
  );
};

export default SmoothSlider;
