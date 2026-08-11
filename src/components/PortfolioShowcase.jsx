import React, { useState } from 'react';
import { 
  Briefcase, FolderKanban, Award, Cpu, Info, ShieldCheck, 
  Code, Palette, FileCode, Layout, Layers,
  Database, Table, BarChart2, PieChart, LayoutDashboard, Terminal, Sparkles, Building2, Calendar,
  Globe, FileText, MapPin, Image, PenTool, Github
} from 'lucide-react';
import { experienceData, projectsData, certificatesData, techStackData } from '../data/portfolioData';
import ProjectModal from './Modals/ProjectModal';
import CertificateModal from './Modals/CertificateModal';

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [techCategoryFilter, setTechCategoryFilter] = useState('All');

  // Icon mapping for tech stack
  const getTechIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code className="w-5 h-5 text-[#E63974]" />;
      case 'database': return <Database className="w-5 h-5 text-[#E63974]" />;
      case 'table': return <Table className="w-5 h-5 text-[#E63974]" />;
      case 'bar-chart-3': return <BarChart2 className="w-5 h-5 text-[#E63974]" />;
      case 'pie-chart': return <PieChart className="w-5 h-5 text-[#E63974]" />;
      case 'layout-dashboard': return <LayoutDashboard className="w-5 h-5 text-[#E63974]" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-[#E63974]" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-[#E63974]" />;
      case 'layers': return <Layers className="w-5 h-5 text-[#E63974]" />;
      case 'palette': return <Palette className="w-5 h-5 text-[#E63974]" />;
      case 'globe': return <Globe className="w-5 h-5 text-[#E63974]" />;
      case 'file-text': return <FileText className="w-5 h-5 text-[#E63974]" />;
      case 'map-pin': return <MapPin className="w-5 h-5 text-[#E63974]" />;
      case 'image': return <Image className="w-5 h-5 text-[#E63974]" />;
      case 'pen-tool': return <PenTool className="w-5 h-5 text-[#E63974]" />;
      case 'github': return <Github className="w-5 h-5 text-[#E63974]" />;
      case 'figma': 
        return (
          <svg className="w-5 h-5 inline-block" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        );
      case 'file-code': return <FileCode className="w-5 h-5 text-[#E63974]" />;
      case 'layout': return <Layout className="w-5 h-5 text-[#E63974]" />;
      default: return <Code className="w-5 h-5 text-[#E63974]" />;
    }
  };

  // Group tech items by level
  const advancedTech = techStackData.filter(item => item.level === 'Advanced');
  const intermediateTech = techStackData.filter(item => item.level === 'Intermediate');
  const beginnerTech = techStackData.filter(item => item.level === 'Beginner');

  return (
    <section id="portfolio" className="relative py-24 bg-transparent border-t border-[#5C1B33]/60">

      {/* Soft Ambient Cyber Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E63974]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#389BE8]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1218] border border-[#5C1B33] text-[#E63974] text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E63974]" />
            Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & Portfolio
          </h2>
          <p className="text-[#B8A3B0] text-sm sm:text-base font-normal leading-relaxed">
            Eksplorasi terpisah antara Pengalaman (Internship & Org), Proyek Analytics, Sertifikasi Resmi, serta Tech Stack.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#E63974] to-[#389BE8] mx-auto rounded-full mt-3 shadow-md" />
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-full bg-[#1A1218] border border-[#5C1B33] shadow-xl backdrop-blur-md gap-1">
            
            {/* Tab 1: Experience */}
            <button
              onClick={() => setActiveTab('experience')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-[#E63974] text-[#0B0B0E] shadow-lg shadow-pink-950/50 font-extrabold scale-105'
                  : 'text-[#B8A3B0] hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>

            {/* Tab 2: Projects */}
            <button
              onClick={() => setActiveTab('projects')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'bg-[#E63974] text-[#0B0B0E] shadow-lg shadow-pink-950/50 font-extrabold scale-105'
                  : 'text-[#B8A3B0] hover:text-white'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Projects</span>
            </button>

            {/* Tab 3: Certificates */}
            <button
              onClick={() => setActiveTab('certificates')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'bg-[#E63974] text-[#0B0B0E] shadow-lg shadow-pink-950/50 font-extrabold scale-105'
                  : 'text-[#B8A3B0] hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificates</span>
            </button>

            {/* Tab 4: Tech Stack */}
            <button
              onClick={() => setActiveTab('techstack')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'techstack'
                  ? 'bg-[#E63974] text-[#0B0B0E] shadow-lg shadow-pink-950/50 font-extrabold scale-105'
                  : 'text-[#B8A3B0] hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Tech Stack</span>
            </button>

          </div>
        </div>

        {/* TAB CONTENT AREAS */}

        {/* 1. EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="group relative rounded-3xl bg-[#1A1218]/90 border border-[#5C1B33] shadow-xl overflow-hidden p-7 flex flex-col justify-between space-y-5 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#E63974]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex items-center justify-between border-b border-[#5C1B33] pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E63974] px-3.5 py-1 rounded-full bg-[#241520] border border-[#E63974]/30">
                    <Building2 className="w-3.5 h-3.5 text-[#E63974]" />
                    {exp.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#B8A3B0] px-3 py-1 rounded-full bg-[#241520] border border-[#5C1B33]">
                    <Calendar className="w-3 h-3 text-[#E63974]" />
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <span className="text-xs font-mono text-[#E63974] font-bold tracking-wide uppercase block">
                    {exp.company}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E63974] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#B8A3B0] leading-relaxed font-normal">
                    {exp.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#241520] border border-[#5C1B33] text-[11px] font-mono text-[#E63974]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#5C1B33]">
                  <button
                    onClick={() => setSelectedItem(exp)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-full bg-[#241520] hover:bg-[#3D1E30] border border-[#5C1B33] text-xs font-bold text-white shadow-md transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-[#E63974]" />
                    <span>Detail Peran</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#1A1218]/90 border border-[#5C1B33] shadow-xl overflow-hidden p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#E63974]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div className="relative h-48 overflow-hidden rounded-2xl border border-[#5C1B33] bg-[#0B0B0E]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#E63974] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E63974] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#B8A3B0] line-clamp-3 font-normal leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#241520] border border-[#5C1B33] text-[11px] font-mono text-[#E63974]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#5C1B33]">
                  <button
                    onClick={() => setSelectedItem(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-full bg-[#241520] hover:bg-[#3D1E30] border border-[#5C1B33] text-xs font-bold text-white shadow-md transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-[#E63974]" />
                    <span>Detail Proyek</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. CERTIFICATES TAB */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="group rounded-3xl bg-[#1A1218]/90 border border-[#5C1B33] shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#E63974]/50 transition-all duration-300 backdrop-blur-md"
              >
                <div
                  onClick={() => setSelectedCertificate(cert)}
                  className="relative h-44 overflow-hidden bg-[#0B0B0E] p-2 cursor-pointer"
                >
                  {cert.image && cert.image.toLowerCase().endsWith('.pdf') ? (
                    <div className="w-full h-full rounded-2xl border border-[#5C1B33] bg-gradient-to-br from-[#241520] via-[#1A1218] to-[#0B0B0E] p-4 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#E63974]/20 border border-[#E63974]/40 flex items-center justify-center text-[#E63974]">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#E63974]/20 border border-[#E63974]/40 text-[#E63974] text-[10px] font-mono font-bold uppercase">
                          PDF DOCUMENT
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white line-clamp-1">{cert.title}</p>
                        <p className="text-[10px] text-[#B8A3B0] font-mono">{cert.issuer}</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={cert.image || './assets/cert-bnsp.png'}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-2xl border border-[#5C1B33] group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#1A1218]/95 border border-[#5C1B33] text-[#E63974] text-[10px] font-mono font-semibold flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3 h-3 text-[#E63974]" />
                    {cert.date}
                  </span>
                </div>

                <div className="p-6 pt-3 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#E63974] font-bold block">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#E63974] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[#B8A3B0] mt-1.5 line-clamp-2 leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#5C1B33] flex justify-between items-center">
                    <span className="text-[10px] font-mono text-[#B8A3B0]">
                      {cert.credentialId}
                    </span>
                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="px-4 py-2 rounded-full bg-[#E63974] hover:bg-[#F44380] text-[#0B0B0E] text-xs font-semibold flex items-center gap-1 shadow-md transition-colors"
                    >
                      <span>Lihat Sertifikat</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. TECH STACK TAB */}
        {activeTab === 'techstack' && (
          <div className="space-y-12">
            
            {/* Level Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['All', 'Advanced', 'Intermediate', 'Beginner'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setTechCategoryFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all duration-300 ${
                    techCategoryFilter === cat
                      ? 'bg-gradient-to-r from-[#E63974] to-[#C22357] text-[#0B0B0E] shadow-lg shadow-pink-950/50 scale-105'
                      : 'bg-[#1A1218] border border-[#5C1B33] text-[#B8A3B0] hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'Tampilkan Semua Level' : `Level ${cat}`}
                </button>
              ))}
            </div>

            {/* GROUP 1: ADVANCED LEVEL (RETRO TAG YELLOW THEME) */}
            {(techCategoryFilter === 'All' || techCategoryFilter === 'Advanced') && (
              <div className="space-y-4 bg-[#1A1218]/60 p-6 sm:p-8 rounded-3xl border border-[#F5D647]/30 shadow-2xl backdrop-blur-md">
                
                <div className="flex items-center justify-between border-b border-[#F5D647]/20 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#F5D647] shadow-lg shadow-yellow-400/50 animate-pulse" />
                    <h3 className="text-base sm:text-lg font-mono font-extrabold text-[#F5D647] uppercase tracking-wider">
                      Advanced Level Skills
                    </h3>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#F5D647]/15 text-[#F5D647] border border-[#F5D647]/30 text-xs font-mono font-bold">
                    Mastered & Proficient
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
                  {advancedTech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group p-5 rounded-2xl bg-[#0B0B0E]/90 border border-[#5C1B33] hover:border-[#F5D647] shadow-lg flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#241520] border border-[#5C1B33] flex items-center justify-center text-[#F5D647] shrink-0 group-hover:scale-110 transition-transform">
                          {getTechIcon(tech.icon)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#F5D647] transition-colors">
                            {tech.name}
                          </h4>
                          <span className="text-[10px] font-mono text-[#B8A3B0] block">
                            {tech.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#F5D647]/20 text-[#F5D647] border border-[#F5D647]/40 font-bold">
                            Advanced
                          </span>
                          <span className="text-[#F5D647] font-bold">{tech.levelPercent}%</span>
                        </div>
                        
                        <div className="w-full h-1.5 rounded-full bg-[#241520] overflow-hidden p-0.5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#E63974] via-[#389BE8] to-[#F5D647] transition-all duration-500 shadow-sm"
                            style={{ width: `${tech.levelPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GROUP 2: INTERMEDIATE LEVEL (HOT MAGENTA PINK THEME) */}
            {(techCategoryFilter === 'All' || techCategoryFilter === 'Intermediate') && (
              <div className="space-y-4 bg-[#1A1218]/60 p-6 sm:p-8 rounded-3xl border border-[#E63974]/30 shadow-2xl backdrop-blur-md">
                
                <div className="flex items-center justify-between border-b border-[#E63974]/20 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#E63974] shadow-lg shadow-pink-500/50 animate-pulse" />
                    <h3 className="text-base sm:text-lg font-mono font-extrabold text-[#E63974] uppercase tracking-wider">
                      Intermediate Level Skills
                    </h3>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#E63974]/15 text-[#E63974] border border-[#E63974]/30 text-xs font-mono font-bold">
                    Strong Working Knowledge
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                  {intermediateTech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group p-5 rounded-2xl bg-[#0B0B0E]/90 border border-[#5C1B33] hover:border-[#E63974] shadow-lg flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#241520] border border-[#E63974]/40 flex items-center justify-center text-[#E63974] shrink-0 group-hover:scale-110 transition-transform">
                          {getTechIcon(tech.icon)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#E63974] transition-colors">
                            {tech.name}
                          </h4>
                          <span className="text-[10px] font-mono text-[#B8A3B0] block">
                            {tech.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E63974]/20 text-[#E63974] border border-[#E63974]/40 font-bold">
                            Intermediate
                          </span>
                          <span className="text-[#E63974] font-bold">{tech.levelPercent}%</span>
                        </div>
                        
                        <div className="w-full h-1.5 rounded-full bg-[#241520] overflow-hidden p-0.5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#C22357] via-[#E63974] to-[#FF70A6] transition-all duration-500 shadow-sm"
                            style={{ width: `${tech.levelPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GROUP 3: BEGINNER LEVEL (ELECTRIC CYAN THEME) */}
            {(techCategoryFilter === 'All' || techCategoryFilter === 'Beginner') && (
              <div className="space-y-4 bg-[#1A1218]/60 p-6 sm:p-8 rounded-3xl border border-[#389BE8]/30 shadow-2xl backdrop-blur-md">
                
                <div className="flex items-center justify-between border-b border-[#389BE8]/20 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#389BE8] shadow-lg shadow-cyan-500/50 animate-pulse" />
                    <h3 className="text-base sm:text-lg font-mono font-extrabold text-[#389BE8] uppercase tracking-wider">
                      Beginner Level Skills
                    </h3>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#389BE8]/15 text-[#389BE8] border border-[#389BE8]/30 text-xs font-mono font-bold">
                    Foundational & Expanding
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                  {beginnerTech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group p-5 rounded-2xl bg-[#0B0B0E]/90 border border-[#5C1B33] hover:border-[#389BE8] shadow-lg flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#241520] border border-[#389BE8]/40 flex items-center justify-center text-[#389BE8] shrink-0 group-hover:scale-110 transition-transform">
                          {getTechIcon(tech.icon)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#389BE8] transition-colors">
                            {tech.name}
                          </h4>
                          <span className="text-[10px] font-mono text-[#B8A3B0] block">
                            {tech.category}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#389BE8]/20 text-[#389BE8] border border-[#389BE8]/40 font-bold">
                            Beginner
                          </span>
                          <span className="text-[#389BE8] font-bold">{tech.levelPercent}%</span>
                        </div>
                        
                        <div className="w-full h-1.5 rounded-full bg-[#241520] overflow-hidden p-0.5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#2A85D0] via-[#389BE8] to-[#60B2F0] transition-all duration-500 shadow-sm"
                            style={{ width: `${tech.levelPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Modals */}
      {selectedItem && (
        <ProjectModal
          project={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default PortfolioShowcase;
