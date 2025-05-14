'use client';

import { useState, useEffect } from 'react';

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed z-50 rounded-full transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '120px',
        height: '120px',
        opacity: 0.4,
        borderRadius: '50%',    
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(124, 58, 237, 0.08) 40%, rgba(79, 70, 229, 0.04) 70%, transparent 100%)',
        boxShadow: '0 0 40px 15px rgba(56, 189, 248, 0.12), 0 0 80px 30px rgba(124, 58, 237, 0.08)',
        mixBlendMode: 'screen',
        filter: 'blur(8px)',
      }}
    />
  );
};

export default GlowingCursor;