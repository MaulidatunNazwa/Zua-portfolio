import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2, Home, User, Briefcase, Mail, Sparkles } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (href, sectionName) => {
    setActiveSection(sectionName.toLowerCase());
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl transition-all duration-300">
      {/* Floating Pill Navbar Container */}
      <div className="rounded-full bg-[#1A1218]/90 backdrop-blur-xl border border-[#5C1B33] shadow-2xl px-5 sm:px-7 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home', 'home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-full bg-[#241520] border border-[#E63974]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
            <BarChart2 className="w-4 h-4 text-[#E63974]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
              Nazwa<span className="text-[#E63974] font-mono text-xs font-semibold">.&lt;analytics/&gt;</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0B0B0E]/80 p-1.5 rounded-full border border-[#5C1B33]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href, link.name)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#E63974] text-[#0B0B0E] shadow-md font-bold'
                    : 'text-[#B8A3B0] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-[#241520] text-white hover:bg-[#3D1E30] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-3xl bg-[#1A1218]/95 border border-[#5C1B33] backdrop-blur-2xl p-4 shadow-2xl space-y-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href, link.name)}
              className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:bg-[#241520] rounded-full transition-colors"
            >
              <link.icon className="w-4 h-4 text-[#E63974]" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
