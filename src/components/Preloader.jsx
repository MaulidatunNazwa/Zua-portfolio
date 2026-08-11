import React, { useState, useEffect } from 'react';
import { Sparkles, BarChart2 } from 'lucide-react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => setIsExiting(true), 200);
      const finishTimer = setTimeout(() => setIsFinished(true), 900);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0B0B0E] flex flex-col items-center justify-center p-6 transition-all duration-700 ease-in-out ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Soft Ambient Cyber Glow Orbs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#E63974]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#389BE8]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm w-full">
        
        {/* Badge Initial MN */}
        <div className="relative transition-transform duration-1000 ease-out transform hover:scale-105 scale-100">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1A1218] border-2 border-[#E63974]/60 shadow-2xl p-2 flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="w-full h-full rounded-full bg-[#0B0B0E] flex flex-col items-center justify-center border border-[#E63974]/40">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-widest font-mono text-[#E63974]">
                MN
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <span>Maulidatun Nazwa</span>
            <Sparkles className="w-4 h-4 text-[#E63974]" />
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-56 sm:w-64 space-y-2 pt-2">
          <div className="w-full h-2 rounded-full bg-[#241520] overflow-hidden p-0.5 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#E63974] via-[#FF70A6] to-[#F5D647] transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-[#B8A3B0]">
            <span className="text-[#E63974] font-semibold">Loading Pipeline...</span>
            <span className="font-bold text-[#E63974]">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
