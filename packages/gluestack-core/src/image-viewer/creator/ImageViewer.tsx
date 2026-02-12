import React, { useState, useCallback, useMemo } from 'react';
import { ImageViewerContext, type ImageItem } from './Context';
//this is test image viewer it made test 
export interface ImageViewerProps {
  images: ImageItem[];
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  initialIndex?: number;
  children?: React.ReactNode;
}

export const ImageViewer = <T extends object>(Root: React.ComponentType<T>) => {
  return React.forwardRef<
    React.ComponentRef<typeof Root>,
    ImageViewerProps & T
  >(function ImageViewerComponent(
    {
      images,
      defaultOpen = false,
      onOpenChange,
      initialIndex = 0,
      children,
      ...props
    },
    ref
  ) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const open = useCallback(() => {
      setIsOpen(true);
      onOpenChange?.(true);
    }, [onOpenChange]);

    const close = useCallback(() => {
      setIsOpen(false);
      onOpenChange?.(false);
    }, [onOpenChange]);

    const goNext = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1 < images.length ? prev + 1 : prev));
    }, [images.length]);

    const goPrevious = useCallback(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    const handleSetIndex = useCallback(
      (index: number) => {
        setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
      },
      [images.length]
    );

    const contextValue = useMemo(
      () => ({
        images,
        currentIndex,
        isOpen,
        setCurrentIndex: handleSetIndex,
        open,
        close,
        goNext,
        goPrevious,
      }),
      [
        images,
        currentIndex,
        isOpen,
        handleSetIndex,
        open,
        close,
        goNext,
        goPrevious,
      ]
    );

    return (
      <ImageViewerContext.Provider value={contextValue}>
        <Root ref={ref} {...(props as T)}>
          {children}
        </Root>
      </ImageViewerContext.Provider>
    );
  });
};
