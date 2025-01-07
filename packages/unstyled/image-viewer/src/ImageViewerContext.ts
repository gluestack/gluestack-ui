import React from 'react';
import type { ImageViewerContext as ImageViewerContextType } from './types';

export const ImageViewerContext = React.createContext<ImageViewerContextType>({
  onClose: () => {},
  isOpen: false,
  scale: 1,
  setScale: () => {},
});
