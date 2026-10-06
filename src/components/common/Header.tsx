import React from 'react';

interface HeaderProps {
  onOpenUpload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenUpload }) => {
  return (
    <header className="border-b border-slate-800 bg-[#0d1117] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center text-black font-extrabold">Z</div>
        <h1 className="font-bold text-white tracking-wide">Zavoka Studio SuperHD</h1>
      </div>
      <button 
        onClick={onOpenUpload}
        className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black transition"
      >
        + Import Asset
      </button>
    </header>
  );
};
