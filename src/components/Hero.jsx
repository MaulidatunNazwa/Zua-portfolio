import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, BarChart2, Sparkles, Database, PieChart, LineChart } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = personalData.roles;

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-16 flex items-center justify-center bg-transparent overflow-hidden">

      {/* Soft Ambient Cyber Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E63974]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#389BE8]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Welcome Pill with Glowing Animation */}
            <div className="relative inline-flex group cursor-pointer">
              {/* Animated Glowing Aura Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#E63974] via-[#389BE8] to-[#F5D647] opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
              
              {/* Main Pill Badge Container */}
              <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#1A1218]/90 border border-[#E63974]/50 text-xs font-extrabold uppercase tracking-wider text-[#E63974] shadow-xl backdrop-blur-xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                {/* Shimmer Light Streak */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full">
                  <div className="w-20 h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep" />
                </div>

                {/* Rotating Sparkles Icon */}
                <Sparkles className="w-4 h-4 text-[#E63974] animate-[spin_4s_linear_infinite] shrink-0" />
                <span className="bg-gradient-to-r from-[#E63974] via-[#FF70A6] to-[#F5D647] bg-clip-text text-transparent font-extrabold">
                  Welcome To My Portfolio
                </span>
              </div>
            </div>

            {/* Main Heading & Name */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#E63974] via-[#FF70A6] to-[#F5D647] bg-clip-text text-transparent font-extrabold">
                {personalData.name}
              </span>
            </h1>

            {/* Typewriter Role Box */}
            <div className="text-lg sm:text-2xl font-mono font-bold text-[#E63974] flex items-center justify-center lg:justify-start gap-2 min-h-[36px]">
              <Terminal className="w-5 h-5 text-[#389BE8]" />
              <span>{displayText}</span>
              <span className="w-2.5 h-5 bg-[#E63974] animate-blink inline-block rounded-sm" />
            </div>

            {/* Description Paragraph */}
            <p className="text-[#B8A3B0] text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalData.heroDescription}
            </p>

            {/* Dual Action Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary Action */}
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E63974] to-[#C22357] hover:from-[#F44380] hover:to-[#E63974] text-[#0B0B0E] font-bold text-sm shadow-lg shadow-pink-950/50 transition-all duration-300 group"
              >
                <span>Projects</span>
                <ArrowRight className="w-4 h-4 text-[#0B0B0E] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Action */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#1A1218] border-2 border-[#E63974] text-[#E63974] hover:bg-[#241520] font-bold text-sm shadow-md transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-[#E63974] group-hover:rotate-12 transition-transform" />
                <span>Contact</span>
              </a>
            </div>

          </div>

          {/* Right Column: Bouncing Data Code Box Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-[#1A1218]/90 border border-[#5C1B33] p-6 font-mono text-xs shadow-2xl space-y-4 animate-float-bounce backdrop-blur-md">
              
              {/* Code Box Header */}
              <div className="flex items-center gap-2 border-b border-[#5C1B33] pb-3">
                <div className="w-3 h-3 rounded-full bg-[#E63974]" />
                <div className="w-3 h-3 rounded-full bg-[#F5D647]" />
                <div className="w-3 h-3 rounded-full bg-[#389BE8]" />
                <span className="text-[#B8A3B0] text-[11px] ml-auto font-semibold">
                  DataPipeline.py
                </span>
              </div>

              {/* Code Snippet Area */}
              <div className="text-white space-y-2 bg-[#0B0B0E] p-4 rounded-2xl border border-[#5C1B33] shadow-inner">
                <div>
                  <span className="text-[#E63974] font-bold">import</span> pandas{' '}
                  <span className="text-[#E63974] font-bold">as</span> pd
                </div>
                <div>
                  <span className="text-[#E63974] font-bold">import</span> sklearn.ensemble{' '}
                  <span className="text-[#E63974] font-bold">as</span> ml
                </div>
                <div className="text-[#876579] italic">
                  # Transform raw data into insights
                </div>
                <div>
                  df = pd.
                  <span className="text-[#389BE8] font-semibold">read_sql</span>(
                  <span className="text-[#F5D647]">'SELECT * FROM business_data'</span>)
                </div>
                <div>
                  model = ml.
                  <span className="text-[#389BE8] font-semibold">CatBoostClassifier</span>()
                </div>
                <div>
                  insights = model.
                  <span className="text-[#E63974] font-semibold">generate_impact</span>(df)
                </div>
              </div>

              {/* Graphic Stats Mini Strip */}
              <div className="p-3 bg-[#241520] rounded-2xl flex justify-around items-center border border-[#5C1B33]">
                <div className="text-center space-y-0.5">
                  <LineChart className="w-4 h-4 text-[#E63974] mx-auto" />
                  <div className="text-[10px] text-white font-semibold">Predictive AI</div>
                </div>
                <div className="text-center space-y-0.5">
                  <PieChart className="w-4 h-4 text-[#389BE8] mx-auto" />
                  <div className="text-[10px] text-white font-semibold">BI Analytics</div>
                </div>
                <div className="text-center space-y-0.5">
                  <Database className="w-4 h-4 text-[#F5D647] mx-auto" />
                  <div className="text-[10px] text-white font-semibold">SQL Mining</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
