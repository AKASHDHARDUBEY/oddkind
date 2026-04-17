import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 240;

// Text overlays that appear at scroll checkpoints
const overlayTexts = [
  { progress: 0.20, text: "Every Brand Has a Story." },
  { progress: 0.40, text: "We Find the Frame That Tells It." },
  { progress: 0.60, text: "Then We Shoot. Edit. Amplify." },
  { progress: 0.80, text: "Across Every Platform. Every Format." },
];

const ScrollCanvas = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES));
  const currentFrameRef = useRef(-1);
  const loadedRef = useRef(new Set());
  const [activeText, setActiveText] = useState(null);
  const [textOpacity, setTextOpacity] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  // Build frame path
  const getFramePath = useCallback((index) => {
    const num = String(index + 1).padStart(3, '0');
    return `${process.env.PUBLIC_URL}/frames/frame_${num}.jpg`;
  }, []);

  // Draw image with cover fit (keeping aspect ratio)
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasW = canvas.width;
    const canvasH = canvas.height;

    // Cover fit calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasW / canvasH;
    let drawW, drawH, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawH = canvasH;
      drawW = canvasH * imgRatio;
      offsetX = (canvasW - drawW) / 2;
      offsetY = 0;
    } else {
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - drawH) / 2;
    }

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvasW, canvasH);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  }, []);

  // Preload ALL frames aggressively
  useEffect(() => {
    const loadImage = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedRef.current.add(index);
          resolve(img);
        };
        img.onerror = () => resolve(null);
        img.src = getFramePath(index);
        imagesRef.current[index] = img;
      });
    };

    // Load first 20 frames immediately (priority)
    const loadInitial = async () => {
      const promises = [];
      for (let i = 0; i < Math.min(20, TOTAL_FRAMES); i++) {
        promises.push(loadImage(i));
      }
      await Promise.all(promises);
      
      // Draw first frame
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        currentFrameRef.current = 0;
        drawFrame(0);
      }
    };

    loadInitial();

    // Then load remaining frames in batches
    const loadRemaining = async () => {
      const batchSize = 20;
      for (let start = 20; start < TOTAL_FRAMES; start += batchSize) {
        const promises = [];
        for (let i = start; i < Math.min(start + batchSize, TOTAL_FRAMES); i++) {
          promises.push(loadImage(i));
        }
        await Promise.all(promises);
      }
    };

    const timer = setTimeout(loadRemaining, 300);
    return () => clearTimeout(timer);
  }, [getFramePath, drawFrame]);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Scroll-driven animation using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const updateCanvas = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) {
        ticking = false;
        return;
      }

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled
      // When section top is at viewport top: scrolled = 0
      // When section bottom is at viewport bottom: scrolled = containerHeight - viewportHeight
      const scrolled = Math.max(0, -rect.top);
      const scrollableDistance = containerHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        ticking = false;
        return;
      }

      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
      );

      // Always try to draw the frame (even if same index, in case it freshly loaded)
      if (frameIndex !== currentFrameRef.current || !loadedRef.current.has(currentFrameRef.current)) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }

      // Handle text overlays
      let foundText = null;
      let bestOpacity = 0;

      for (const overlay of overlayTexts) {
        const diff = Math.abs(progress - overlay.progress);
        if (diff < 0.07) {
          const opacity = Math.max(0, 1 - diff / 0.07);
          if (opacity > bestOpacity) {
            foundText = overlay.text;
            bestOpacity = opacity;
          }
        }
      }

      if (foundText && bestOpacity > 0.01) {
        setActiveText(foundText);
        setTextOpacity(bestOpacity);
        setUnderlineWidth(bestOpacity * 100);
      } else {
        if (textOpacity > 0) {
          setTextOpacity(0);
          setUnderlineWidth(0);
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateCanvas);
      }
    };

    // Initial draw based on current scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [drawFrame, textOpacity]);

  return (
    <section className="scroll-canvas-section" ref={containerRef} id="scroll-animation">
      <div className="scroll-canvas-sticky">
        <canvas
          ref={canvasRef}
          className="scroll-canvas"
          id="scroll-canvas-element"
        />

        {/* Text overlay */}
        <div
          className="scroll-canvas-overlay"
          style={{ 
            opacity: textOpacity,
            pointerEvents: 'none',
            visibility: textOpacity > 0.01 ? 'visible' : 'hidden' 
          }}
        >
          <h2 className="scroll-overlay-text">{activeText}</h2>
          <div
            className="scroll-overlay-underline"
            style={{ width: `${underlineWidth}%` }}
          />
        </div>

        {/* Progress indicator */}
        <div className="scroll-canvas-progress">
          <div className="scroll-canvas-progress-text">
            {currentFrameRef.current >= 0 && ''}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollCanvas;
