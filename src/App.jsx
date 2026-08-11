import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import StarfieldBackground from './components/StarfieldBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#F4F0EA] font-sans selection:bg-[#E63974] selection:text-[#0B0B0E] relative">
      {/* Pre-loader / Splash Screen */}
      <Preloader />

      {/* Twinkling Starfield Background Layer */}
      <StarfieldBackground />

      {/* Soft Radial Dots Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.06] z-0"
        style={{
          backgroundImage: `radial-gradient(#e63974 1px, transparent 1px)`,
          backgroundSize: `32px 32px`
        }}
      />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Page Content */}
      <main className="relative z-10 space-y-0">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Portfolio Showcase Section */}
        <PortfolioShowcase />

        {/* 4. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
