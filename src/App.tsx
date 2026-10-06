import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { NavigationTabs } from './components/common/NavigationTabs';
import { SuperHdEditor } from './components/editor/SuperHdEditor';
import { ProductStaging } from './components/staging/ProductStaging';
import { ExportLab } from './components/export/ExportLab';
import { UploadModal } from './components/upload/UploadModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'staging' | 'export'>('editor');
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans">
      <Header onOpenUpload={() => setIsUploadOpen(true)} />
      <NavigationTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'editor' && <SuperHdEditor />}
        {activeTab === 'staging' && <ProductStaging lightingPreset="studio" />}
        {activeTab === 'export' && <ExportLab />}
      </main>

      {isUploadOpen && <UploadModal onClose={() => setIsUploadOpen(false)} />}
    </div>
  );
}