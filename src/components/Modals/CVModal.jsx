import React from 'react';
import { X, FileText, Download } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = personalData.cvPdfUrl || './assets/CV_Maulidatun_Nazwa.pdf';
    a.download = 'CV_Maulidatun_Nazwa.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0E]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#1A1218] border border-[#5C1B33] p-6 sm:p-8 space-y-5 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#5C1B33] pb-4">
          <span className="flex items-center gap-1.5 text-xs font-bold text-[#E63974]">
            <FileText className="w-4 h-4 text-[#E63974]" /> Curriculum Vitae (PDF)
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#241520] border border-[#5C1B33] text-[#B8A3B0] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Box */}
        <div className="p-5 rounded-2xl bg-[#0B0B0E] border border-[#5C1B33] text-xs space-y-3 shadow-sm">
          <h4 className="text-xl font-bold text-white">{personalData.name}</h4>
          <p className="text-[#E63974] font-mono font-semibold">{personalData.title}</p>
          <p className="text-[#B8A3B0] leading-relaxed font-normal">{personalData.aboutBio}</p>
          
          <div className="pt-2 text-[#E63974] text-xs font-bold flex items-center gap-1.5 border-t border-[#5C1B33]">
            <FileText className="w-4 h-4 text-[#E63974]" /> Dokumen Asli PDF Siap Diunduh
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#241520] text-white text-xs font-bold hover:bg-[#3D1E30] transition-colors"
          >
            Tutup
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#E63974] hover:bg-[#F44380] text-xs font-bold text-[#0B0B0E] shadow-lg shadow-pink-950/50 transition-all"
          >
            <Download className="w-4 h-4 text-[#0B0B0E]" />
            <span>Unduh PDF CV</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default CVModal;
