import React from 'react';
import { Mail, Linkedin, Github, MapPin, Sparkles, Phone } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#181016] via-[#0B0B0E] to-[#0B0B0E] border-t border-[#5C1B33]/60 px-4">
      {/* Soft Ambient Cyber Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E63974]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#389BE8]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1218]/90 border border-[#5C1B33] text-xs font-bold uppercase text-[#E63974] shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E63974]" />
            <span>HUBUNGI SAYA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#E63974] to-[#389BE8] mx-auto rounded-full mt-2" />
        </div>

        {/* Futuristic Horizontal Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* SISI KIRI: Glowing Neon Ring with Bold Typography */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full border-2 border-white/60 shadow-[0_0_50px_rgba(230,57,116,0.35)] backdrop-blur-md bg-white/5 flex items-center justify-center p-8 text-center group hover:border-white/90 transition-all duration-500">
              {/* Outer Glowing Neon Rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#E63974]/30 via-[#389BE8]/30 to-[#F5D647]/30 blur-2xl animate-pulse pointer-events-none" />
              <div className="absolute -inset-1 rounded-full border border-white/20 animate-[spin_10s_linear_infinite] pointer-events-none" />

              {/* Centered Typography */}
              <div className="relative z-10 space-y-3 px-2">
                <Sparkles className="w-8 h-8 text-[#E63974] mx-auto animate-bounce" />
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white tracking-tight uppercase leading-snug">
                  LET'S CREATE <span className="bg-gradient-to-r from-[#E63974] via-[#FF70A6] to-[#389BE8] bg-clip-text text-transparent">SOMETHING EXTRAORDINARY</span> TOGETHER
                </h3>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Thin Outline Card with Vertical Contact Info & Social Circles */}
          <div className="lg:col-span-7">
            <div className="border border-white/50 rounded-3xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 backdrop-blur-sm bg-white/5 shadow-2xl shadow-white/5 space-y-8 text-white transition-all duration-300 hover:border-white/70">
              
              {/* Card Title & Status Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/20 pb-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white">Contact Information</h4>
                  <p className="text-xs text-[#B8A3B0] mt-1">Direct communication & social networks</p>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wider backdrop-blur-md w-fit">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open for opportunities</span>
                </div>
              </div>

              {/* Content Grid inside Card: Left = Vertical Info, Right = Social Icons */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Vertical Contact Info */}
                <div className="md:col-span-8 space-y-6">
                  {/* Email Direct */}
                  <a
                    href={personalData.socials.email.url}
                    className="flex items-center gap-4 group p-3 rounded-2xl transition-colors hover:bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-white/5 flex items-center justify-center text-[#E63974] group-hover:border-[#E63974] group-hover:scale-110 transition-all shrink-0">
                      <Mail className="w-5 h-5 text-[#E63974]" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-mono uppercase text-[#B8A3B0] tracking-widest">Email Direct</p>
                      <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-[#E63974] transition-colors truncate">
                        {personalData.socials.email.username}
                      </h5>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3 rounded-2xl">
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-white/5 flex items-center justify-center text-[#389BE8] shrink-0">
                      <MapPin className="w-5 h-5 text-[#389BE8]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#B8A3B0] tracking-widest">Location</p>
                      <h5 className="text-sm sm:text-base font-bold text-white">
                        Jakarta, Indonesia
                      </h5>
                    </div>
                  </div>

                  {/* WhatsApp / Call */}
                  <a
                    href={personalData.socials.whatsapp?.url || "https://wa.me/6285891259937"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-3 rounded-2xl transition-colors hover:bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-white/5 flex items-center justify-center text-[#F5D647] group-hover:border-[#F5D647] group-hover:scale-110 transition-all shrink-0">
                      <Phone className="w-5 h-5 text-[#F5D647]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-[#B8A3B0] tracking-widest">WhatsApp / Call</p>
                      <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-[#F5D647] transition-colors">
                        {personalData.socials.whatsapp?.username || "+62 858-9125-9937"}
                      </h5>
                    </div>
                  </a>
                </div>

                {/* Right Side: Social Media Circles (Vertically or in Grid, cleanly without barcode/QR) */}
                <div className="md:col-span-4 flex md:flex-col items-center justify-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
                  <p className="text-[10px] font-mono uppercase text-[#B8A3B0] tracking-widest hidden md:block text-center mb-1">
                    Socials
                  </p>
                  
                  {/* LinkedIn */}
                  <a
                    href={personalData.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-12 h-12 rounded-full border border-white/40 bg-white/5 hover:border-[#E63974] hover:bg-white/15 hover:scale-110 flex items-center justify-center text-white transition-all shadow-md group"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:text-[#E63974] transition-colors" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={personalData.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="w-12 h-12 rounded-full border border-white/40 bg-white/5 hover:border-[#E63974] hover:bg-white/15 hover:scale-110 flex items-center justify-center text-white transition-all shadow-md group"
                  >
                    <Github className="w-5 h-5 text-white group-hover:text-[#E63974] transition-colors" />
                  </a>

                  {/* Direct Email */}
                  <a
                    href={personalData.socials.email.url}
                    title="Send Email"
                    className="w-12 h-12 rounded-full border border-white/40 bg-white/5 hover:border-[#E63974] hover:bg-white/15 hover:scale-110 flex items-center justify-center text-white transition-all shadow-md group"
                  >
                    <Mail className="w-5 h-5 text-white group-hover:text-[#E63974] transition-colors" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
