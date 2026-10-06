export interface ProductStagingProps {
  initialAssetUrl?: string;
  lightingPreset?: 'studio' | 'neon' | 'sunset' | 'cyber';
  onAssetExport?: (assetId: string) => void;
}

export interface StudioConfig {
  version: string;
  enableGpuAcceleration: boolean;
  renderQuality: 'standard' | 'super-hd' | 'ultra-4k';
}

export interface ExportPreset {
  format: 'png' | 'webp' | 'jpeg' | 'svg';
  scale: 1 | 2 | 4;
  transparentBackground: boolean;
}
