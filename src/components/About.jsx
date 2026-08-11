import React, { useState } from 'react';
import { FileText, BarChart2, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import CVModal from './Modals/CVModal';

const About = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Photo 1 (Front) & Photo 2 (Back)
  const photo1 = "./assets/profile-nazwa.png";
  const photo2 = "./assets/profile-nazwa-2.jpg";

  const handleFlipPhoto = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#0B0B0E] via-[#181016] to-[#0B0B0E] border-t border-[#5C1B33]/60">
      {/* Soft Ambient Cyber Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E63974]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#389BE8]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1218]/90 border border-[#5C1B33] text-[#E63974] text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E63974]" />
            <span>ABOUT ME</span>
          </div>
          
          {/* Main H2 Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {personalData.aboutTagline}
          </h2>

          {/* Accent Line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#E63974] to-[#389BE8] mx-auto rounded-full mt-3 shadow-md shadow-pink-500/20" />
        </div>

        {/* Main White Outline Glassmorphism Card Container (Enclosing both Photo & Text) */}
        <div className="border border-white/50 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-12 backdrop-blur-sm bg-white/5 shadow-2xl shadow-white/5 transition-all duration-300 hover:border-white/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 3D FLIPPABLE PERFECT CIRCLE PROFILE PHOTO */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div
                onClick={handleFlipPhoto}
                className="relative group cursor-pointer"
                style={{ perspective: '1000px' }}
                title="Klik foto untuk memutar"
              >
                {/* Outer Glowing Aura Ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-white/40 via-[#E63974] to-[#389BE8] opacity-80 blur-lg animate-shining-glow transition duration-500" />
                
                {/* 3D Flippable Container with Glowing White Outline */}
                <div
                  className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full border-4 border-white/80 shadow-[0_0_30px_rgba(255,255,255,0.3)] shadow-pink-950/50 flex items-center justify-center bg-[#1A1218] transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    WebkitTransform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Glossy Reflection Sweep */}
                  <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-full">
                    <div className="w-28 h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep" />
                  </div>

                  {/* FRONT FACE (Photo 1 - profile-nazwa.png) */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#0B0B0E]"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                      WebkitTransform: 'rotateY(0deg)',
                      zIndex: isFlipped ? 1 : 2
                    }}
                  >
                    <img
                      src={photo1}
                      alt={personalData.name}
                      className="w-full h-full object-cover object-center rounded-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>

                  {/* BACK FACE (Photo 2 - profile-nazwa-2.jpg) */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#0B0B0E]"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      WebkitTransform: 'rotateY(180deg)',
                      zIndex: isFlipped ? 2 : 1
                    }}
                  >
                    <img
                      src={photo2}
                      alt={`${personalData.name} - Photo 2`}
                      className="w-full h-full object-cover object-center rounded-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 space-y-6 text-white">
              
              {/* Greeting Heading (Starts directly here) */}
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-[#E63974] via-[#FF70A6] to-[#F5D647] bg-clip-text text-transparent font-extrabold">
                  Maulidatun Nazwa
                </span>
              </h3>

              {/* Bio Narrative */}
              <p className="text-base sm:text-lg leading-relaxed text-[#F4F0EA]/90 font-normal">
                {personalData.aboutBio}
              </p>

              {/* Quote Box */}
              <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-white/70 border-t border-r border-b border-white/20 shadow-xl text-pink-50 font-semibold italic text-base sm:text-lg backdrop-blur-md">
                "{personalData.quote}"
              </div>

              {/* Action Buttons - Centered */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {/* Download CV Button */}
                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E63974] to-[#C22357] hover:from-[#F44380] hover:to-[#E63974] text-[#0B0B0E] font-bold text-base shadow-lg shadow-pink-950/40 transition-all duration-300 group"
                >
                  <FileText className="w-5 h-5 text-[#0B0B0E] group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </button>

                {/* View Projects Button */}
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white/10 border border-white/40 text-white hover:bg-white/20 hover:border-white font-bold text-base shadow-md backdrop-blur-md transition-all duration-300 group"
                >
                  <BarChart2 className="w-5 h-5 text-[#E63974] group-hover:rotate-12 transition-transform" />
                  <span>View Projects</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* CV Preview & Download Modal */}
      {isCVModalOpen && <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />}
    </section>
  );
};

export default About;
