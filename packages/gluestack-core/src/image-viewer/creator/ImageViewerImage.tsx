import React from 'react';
import { useImageViewer } from './Context';

export interface ImageViewerImageProps {
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
  className?: string;
}

export const ImageViewerImage = <T extends object>(
  Image: React.ComponentType<T>
) => {
  return React.forwardRef<
    React.ComponentRef<typeof Image>,
    ImageViewerImageProps & T
  >(function ImageViewerImageComponent(
    { resizeMode = 'contain', className, ...props },
    ref
  ) {
    const { images, currentIndex } = useImageViewer();
    const currentImage = images[currentIndex];

    if (!currentImage) return null;

    return (
      <Image
        ref={ref}
        source={{ uri: currentImage.url }}
        alt={currentImage.alt}
        resizeMode={resizeMode}
        className={className}
        {...props}
      />
    );
  });
};
