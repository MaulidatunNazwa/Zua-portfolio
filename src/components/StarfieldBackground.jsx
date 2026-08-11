import React, { useMemo } from 'react';

const StarfieldBackground = () => {
  // Generate a deterministic set of stars to prevent hydration mismatch
  const stars = useMemo(() => {
    const starList = [];
    const colors = ['#E63974', '#389BE8', '#F5D647', '#F4F0EA', '#FF70A6'];
    
    // Generate 85 small twinkling dot stars & 4-point sparkles
    for (let i = 0; i < 85; i++) {
      const top = Math.floor(Math.abs(Math.sin(i * 997 + 1)) * 100); 
      const left = Math.floor(Math.abs(Math.cos(i * 7919 + 1)) * 100);
      const size = (i % 4 === 0) ? 3 : (i % 2 === 0) ? 2 : 1.5;
      const duration = (2.0 + (i % 6) * 0.7).toFixed(1);
      const delay = ((i % 8) * 0.4).toFixed(1);
      const color = colors[i % colors.length];
      const opacity = (0.35 + (i % 4) * 0.15).toFixed(2);

      starList.push({
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        color,
        opacity,
        duration: `${duration}s`,
        delay: `${delay}s`,
        isSparkle: i % 10 === 0 // every 10th star is a 4-point sparkle icon
      });
    }
    return starList;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {stars.map((star) => (
        star.isSparkle ? (
          <svg
            key={star.id}
            className="absolute animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: '12px',
              height: '12px',
              color: star.color,
              opacity: star.opacity,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        ) : (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.width,
              height: star.height,
              backgroundColor: star.color,
              boxShadow: `0 0 6px ${star.color}`,
              opacity: star.opacity,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          />
        )
      ))}
    </div>
  );
};

export default StarfieldBackground;
