import React, { useEffect, useRef } from 'react';

const AuroraBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Multi-layer Aurora Wave Bands with luminous glowing gradient stops
    const auroraWaves = [
      {
        stops: [
          { pos: 0, color: 'rgba(0, 245, 212, 0.65)' },    // Vivid Cyan-Teal
          { pos: 0.35, color: 'rgba(56, 155, 232, 0.55)' }, // Electric Blue
          { pos: 0.7, color: 'rgba(230, 57, 116, 0.4)' },   // Magenta Glow
          { pos: 1, color: 'rgba(11, 11, 14, 0)' }
        ],
        speed: 0.0018,
        amplitude: 110,
        frequency: 0.0018,
        yOffsetRatio: 0.18
      },
      {
        stops: [
          { pos: 0, color: 'rgba(230, 57, 116, 0.6)' },   // Hot Magenta
          { pos: 0.4, color: 'rgba(139, 92, 246, 0.5)' },  // Deep Violet
          { pos: 0.8, color: 'rgba(0, 245, 212, 0.35)' },  // Emerald Teal
          { pos: 1, color: 'rgba(11, 11, 14, 0)' }
        ],
        speed: 0.0014,
        amplitude: 130,
        frequency: 0.0012,
        yOffsetRatio: 0.4
      },
      {
        stops: [
          { pos: 0, color: 'rgba(168, 85, 247, 0.55)' },  // Royal Purple
          { pos: 0.45, color: 'rgba(56, 155, 232, 0.45)' },// Cyan Blue
          { pos: 0.8, color: 'rgba(245, 214, 71, 0.35)' }, // Solar Gold
          { pos: 1, color: 'rgba(11, 11, 14, 0)' }
        ],
        speed: 0.0022,
        amplitude: 95,
        frequency: 0.0022,
        yOffsetRatio: 0.62
      },
      {
        stops: [
          { pos: 0, color: 'rgba(0, 245, 212, 0.5)' },   // Emerald Aurora
          { pos: 0.5, color: 'rgba(230, 57, 116, 0.45)' },// Magenta Ribbon
          { pos: 1, color: 'rgba(11, 11, 14, 0)' }
        ],
        speed: 0.001,
        amplitude: 140,
        frequency: 0.0009,
        yOffsetRatio: 0.82
      }
    ];

    let step = 0;

    const render = () => {
      step += 1;
      ctx.clearRect(0, 0, width, height);

      // Render each living Aurora curtain band
      auroraWaves.forEach((wave) => {
        const time = step * wave.speed;
        const baseY = height * wave.yOffsetRatio;

        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 10) {
          const y =
            baseY +
            Math.sin(x * wave.frequency + time) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.6 + time * 1.4) * (wave.amplitude * 0.6) +
            Math.sin(time * 0.8 + x * 0.0005) * 30;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - wave.amplitude * 2.5, 0, height);
        wave.stops.forEach((s) => {
          grad.addColorStop(s.pos, s.color);
        });

        ctx.fillStyle = grad;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#0B0B0E]">
      {/* CSS Living Animated Aurora Glowing Blobs (Top, Center, Bottom) */}
      <div className="absolute -top-[15%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-[#00F5D4]/40 via-[#389BE8]/35 to-[#E63974]/30 blur-[120px] animate-aurora-flow-1" />
      <div className="absolute top-[25%] -right-[15%] w-[75vw] h-[75vw] rounded-full bg-gradient-to-bl from-[#E63974]/40 via-[#8B5CF6]/35 to-[#00F5D4]/30 blur-[130px] animate-aurora-flow-2" />
      <div className="absolute top-[60%] -left-[15%] w-[85vw] h-[85vw] rounded-full bg-gradient-to-tr from-[#389BE8]/35 via-[#00F5D4]/40 to-[#F5D647]/25 blur-[140px] animate-aurora-flow-3" />
      <div className="absolute -bottom-[20%] right-[0%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-[#E63974]/35 via-[#8B5CF6]/30 to-[#389BE8]/25 blur-[130px] animate-aurora-flow-1" />

      {/* Living Animated Aurora Canvas Wave Curtains */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100 blur-[24px] mix-blend-screen"
      />

      {/* Vertical Aurora Light Rays Effect Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-color-dodge"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(0, 245, 212, 0.15) 45px,
            transparent 50px,
            transparent 90px,
            rgba(230, 57, 116, 0.15) 95px,
            transparent 100px
          )`
        }}
      />
    </div>
  );
};

export default AuroraBackground;
