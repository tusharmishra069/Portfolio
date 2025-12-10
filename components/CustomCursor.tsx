"use client";

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const size = 40; // fixed size

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - size / 2}px, ${e.clientY - size / 2}px, 0)`;
      }
    };
    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };
    const showCursor = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    };
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.body.style.cursor = 'none';
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'rgba(255, 221, 51, 0.85)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'background 0.2s, opacity 0.2s',
        mixBlendMode: 'difference',
        opacity: 1,
        boxShadow: '0 0 16px 4px rgba(255,221,51,0.3)'
      }}
    />
  );
};

export default CustomCursor; 