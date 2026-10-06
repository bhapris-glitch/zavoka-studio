import React from 'react';

interface UploadModalProps {
  onClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
      <div className="bg-[#111622] border border-slate-700 rounded-xl p-6 max-w-md w-full space-y-4">
        <h3 className="font-bold text-white text-lg">Upload Brand Asset</h3>
        <p className="text-xs text-slate-400">Supports SVG, High-Res PNG, and WebP assets.</p>
        <button 
          onClick={onClose}
          className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-sm font-semibold transition"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};