import type React from 'react';
import { createContext, useContext } from 'react';

export interface ImageItem {
  url: string;
  alt?: string;
}

export interface ImageViewerContextType {
  images: ImageItem[];
  currentIndex: number;
  isOpen: boolean;
  setCurrentIndex: (index: number) => void;
  open: () => void;
  close: () => void;
  goNext: () => void;
  goPrevious: () => void;
}

export const ImageViewerContext = createContext<
  ImageViewerContextType | undefined
>(undefined);

export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (!context) {
    throw new Error('useImageViewer must be used within an ImageViewer');
  }
  return context;
};
