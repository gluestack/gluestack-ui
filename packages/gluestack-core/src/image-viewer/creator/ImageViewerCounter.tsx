import React from 'react';
import { useImageViewer } from './Context';

export interface ImageViewerCounterProps {
  children?: React.ReactNode;
}

export const ImageViewerCounter = <T extends object>(
  Counter: React.ComponentType<T>
) => {
  return React.forwardRef<
    React.ComponentRef<typeof Counter>,
    ImageViewerCounterProps & T
  >(function ImageViewerCounterComponent({ children, ...props }, ref) {
    const { currentIndex, images } = useImageViewer();

    return (
      <Counter
        ref={ref}
        currentIndex={currentIndex + 1}
        total={images.length}
        {...props}
      >
        {children}
      </Counter>
    );
  });
};
