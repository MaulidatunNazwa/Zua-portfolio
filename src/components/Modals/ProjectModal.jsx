import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const renderText = (text) => {
  if (!text) return null;
  const regex = /(\*\*.*?\*\*|\*.*?\*)/g;
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <strong key={i} className="text-white font-bold">{part.slice(1, -1)}</strong>;
    }
    return part;
  });
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const imagesList = (project.images && project.images.length > 0)
    ? project.images
    : [project.image];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  const isExperience = Boolean(
    project.company || 
    (project.id && project.id.startsWith('exp-')) ||
    (project.category && /intern|organis|experience|pengalaman|partnership/i.test(project.category))
  );

  const descriptionHeader = isExperience ? "Deskripsi Peran" : "Deskripsi Proyek";
  const featuresHeader = isExperience ? "Tanggung Jawab & Kontribusi" : "Fitur & Analisis Utama";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0E]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl bg-[#1A1218] border border-[#5C1B33] p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#5C1B33] pb-4">
          <span className="px-3.5 py-1 rounded-full bg-[#241520] border border-[#E63974]/30 text-[#E63974] text-xs font-bold uppercase tracking-wider">
            {project.category}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#241520] border border-[#5C1B33] text-[#B8A3B0] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project Image Gallery Slider */}
        <div className="space-y-3">
          <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#5C1B33] bg-[#0B0B0E] shadow-inner group">
            <img
              src={imagesList[activeImageIndex] || project.image}
              alt={`${project.title} - Slide ${activeImageIndex + 1}`}
              className="w-full h-full object-contain bg-[#0B0B0E] transition-all duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
              }}
            />

            {/* Counter Badge if multiple images */}
            {imagesList.length > 1 && (
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B0B0E]/80 backdrop-blur-md border border-[#5C1B33] text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md">
                <Images className="w-3.5 h-3.5 text-[#E63974]" />
                <span>{activeImageIndex + 1} / {imagesList.length}</span>
              </div>
            )}

            {/* Navigation Arrows if multiple images */}
            {imagesList.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0B0E]/70 hover:bg-[#E63974] text-white transition-all border border-[#5C1B33] shadow-lg backdrop-blur-sm"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B0B0E]/70 hover:bg-[#E63974] text-white transition-all border border-[#5C1B33] shadow-lg backdrop-blur-sm"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails Row if multiple images */}
          {imagesList.length > 1 && (
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 custom-scrollbar">
              {imagesList.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === idx
                      ? 'border-[#E63974] ring-2 ring-[#E63974]/30 scale-105'
                      : 'border-[#5C1B33] opacity-60 hover:opacity-100'
                    }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Title */}
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Deskripsi Section */}
        <div className="space-y-2 pt-1">
          <h4 className="text-sm font-extrabold text-white tracking-wide">
            {descriptionHeader}
          </h4>
          <p className="text-xs sm:text-sm text-[#B8A3B0] leading-relaxed font-normal">
            {renderText(project.fullDesc || project.shortDesc)}
          </p>
        </div>

        {/* Fitur / Tanggung Jawab Section */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-extrabold text-white tracking-wide">
              {featuresHeader}
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((featureText, i) => {
                const colonIndex = featureText.indexOf(':');
                if (colonIndex !== -1) {
                  const titlePart = featureText.slice(0, colonIndex + 1);
                  const bodyPart = featureText.slice(colonIndex + 1);
                  return (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8A3B0] leading-relaxed">
                      <span className="text-[#E63974] font-bold text-base leading-none mt-0.5">•</span>
                      <span>
                        <strong className="text-white font-bold">{renderText(titlePart)}</strong>
                        {renderText(bodyPart)}
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B8A3B0] leading-relaxed">
                    <span className="text-[#E63974] font-bold text-base leading-none mt-0.5">•</span>
                    <span>{renderText(featureText)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-[#241520] border border-[#5C1B33] text-xs font-mono text-[#E63974]">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end pt-4 border-t border-[#5C1B33]">
          <button
            onClick={onClose}
            className="px-7 py-2.5 rounded-full bg-[#E63974] hover:bg-[#F44380] text-[#0B0B0E] text-xs font-extrabold shadow-lg shadow-pink-950/50 transition-all"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
