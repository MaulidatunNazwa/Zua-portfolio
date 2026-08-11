import React, { useState } from 'react';
import { X, ExternalLink, Download, ShieldCheck, FileText } from 'lucide-react';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  const certImg = certificate.image || './assets/cert-bnsp.png';
  const isPdf = certImg.toLowerCase().endsWith('.pdf');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0E]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl bg-[#1A1218] border border-[#5C1B33] p-6 sm:p-8 space-y-5 shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#5C1B33] pb-4">
          <span className="flex items-center gap-1.5 text-xs font-bold text-[#E63974]">
            <ShieldCheck className="w-4 h-4 text-[#E63974]" /> Dokumen Sertifikat Resmi
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#241520] border border-[#5C1B33] text-[#B8A3B0] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Certificate Preview Image or PDF Viewer */}
        <div className="relative group rounded-2xl overflow-hidden border border-[#5C1B33] bg-[#0B0B0E] shadow-inner flex items-center justify-center min-h-[220px]">
          {isPdf ? (
            <div className="w-full space-y-3 p-2 text-center">
              <iframe
                src={certImg}
                title={certificate.title}
                className="w-full h-72 sm:h-96 rounded-xl border border-[#5C1B33] bg-[#0B0B0E]"
              />
              <div className="flex justify-center">
                <a
                  href={certImg}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-[#E63974] text-[#0B0B0E] text-xs font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" /> Buka PDF di Tab Baru / Fullscreen
                </a>
              </div>
            </div>
          ) : (
            <>
              <img
                src={certImg}
                alt={certificate.title}
                className="w-full max-h-[360px] object-contain p-2 rounded-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-[#0B0B0E]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <a
                  href={certImg}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#E63974] text-[#0B0B0E] text-xs font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" /> Buka Ukuran Penuh
                </a>
              </div>
            </>
          )}
        </div>

        {/* Title & Description */}
        <div className="text-center space-y-1">
          <h3 className="text-xl font-bold text-white">
            {certificate.title}
          </h3>
          <p className="text-xs text-[#E63974] font-mono font-medium">
            {certificate.issuer} • {certificate.date}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0B0B0E] border border-[#5C1B33] text-xs text-white space-y-2 text-left shadow-sm">
          <div>
            <span className="text-[#B8A3B0]">ID Kredensial: </span>
            <span className="text-[#E63974] font-mono font-bold">{certificate.credentialId}</span>
          </div>
          <p className="text-[#B8A3B0] leading-relaxed">{certificate.description}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-[#5C1B33]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#241520] text-white text-xs font-bold hover:bg-[#3D1E30] transition-colors"
          >
            Tutup
          </button>

          <a
            href={certImg}
            download={`${certificate.id}.png`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#E63974] hover:bg-[#F44380] text-[#0B0B0E] text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
          >
            <Download className="w-3.5 h-3.5" /> Unduh Dokumen
          </a>
        </div>

      </div>
    </div>
  );
};

export default CertificateModal;
