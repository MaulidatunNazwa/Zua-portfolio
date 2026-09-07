import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 bg-transparent border-t border-[#5C1B33] text-[#B8A3B0] text-xs">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} <span className="font-bold text-white">{personalData.name}</span>. All rights reserved. Crafted with React & Tailwind CSS.
        </p>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1218] border border-[#5C1B33] text-[#E63974] hover:bg-[#241520] font-semibold transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
