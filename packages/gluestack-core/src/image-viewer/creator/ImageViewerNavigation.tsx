import React, { useCallback } from 'react';
import { useImageViewer } from './Context';

export interface ImageViewerNavigationProps {
  children?: React.ReactNode;
}

export const ImageViewerNavigation = <T extends object>(
  Navigation: React.ComponentType<T>
) => {
  return React.forwardRef<
    React.ComponentRef<typeof Navigation>,
    ImageViewerNavigationProps & T
  >(function ImageViewerNavigationComponent({ children, ...props }, ref) {
    const { goNext, goPrevious, images, currentIndex } = useImageViewer();

    const canGoPrevious = currentIndex > 0;
    const canGoNext = currentIndex < images.length - 1;

    return (
      <Navigation
        ref={ref}
        onPrevious={canGoPrevious ? goPrevious : undefined}
        onNext={canGoNext ? goNext : undefined}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        {...props}
      >
        {children}
      </Navigation>
    );
  });
};
