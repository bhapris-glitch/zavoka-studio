import React from 'react';

interface NavigationTabsProps {
  activeTab: 'editor' | 'staging' | 'export';
  onChangeTab: (tab: 'editor' | 'staging' | 'export') => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, onChangeTab }) => {
  const tabs = [
    { id: 'editor', label: 'SuperHD Editor' },
    { id: 'staging', label: 'Product Staging' },
    { id: 'export', label: 'Export Lab' },
  ] as const;

  return (
    <nav className="border-b border-slate-800 bg-[#0a0d14] px-6 flex gap-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChangeTab(tab.id)}
          className={`py-3 text-sm font-medium border-b-2 transition ${
            activeTab === tab.id
              ? 'border-cyan-400 text-cyan-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};