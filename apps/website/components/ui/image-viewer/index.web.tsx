'use client';
import React, { useCallback, useState, useEffect } from 'react';
import { Modal } from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';

interface ImageItem {
  url: string;
  alt?: string;
}

interface ImageViewerProps {
  images: ImageItem[];
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onIndexChange?: (index: number) => void;
  initialIndex?: number;
  children?: React.ReactNode;
}

interface ImageViewerTriggerProps {
  children: React.ReactNode;
  onPress?: () => void;
}

// Web-specific styles - using z-[9999] to ensure it's on top of everything
const imageViewerModalStyle = tva({
  base: 'fixed inset-0 bg-black z-[9999]',
});

const imageViewerContentStyle = tva({
  base: 'flex flex-col items-center justify-center h-full w-full',
});

const imageViewerCloseButtonStyle = tva({
  base: 'absolute top-2 right-4 z-[10000] w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xl font-bold cursor-pointer backdrop-blur-sm',
});

const imageViewerNavigationStyle = tva({
  base: 'absolute inset-0 flex items-center justify-between px-4 pointer-events-none',
});

const imageViewerNavButtonStyle = tva({
  base: 'w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-2xl font-bold cursor-pointer pointer-events-auto backdrop-blur-sm',
});

const imageViewerCounterStyle = tva({
  base: 'absolute bottom-8 left-0 right-0 flex justify-center',
});

const imageViewerCounterTextStyle = tva({
  base: 'text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full',
});

// Context for ImageViewer
interface ImageViewerContextType {
  images: ImageItem[];
  currentIndex: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  goNext: () => void;
  goPrevious: () => void;
}

const ImageViewerContext = React.createContext<
  ImageViewerContextType | undefined
>(undefined);

const useImageViewerContext = () => {
  const context = React.useContext(ImageViewerContext);
  if (!context) {
    throw new Error('useImageViewerContext must be used within ImageViewer');
  }
  return context;
};

// Main ImageViewer Component
const ImageViewer = React.forwardRef<HTMLDivElement, ImageViewerProps>(
  function ImageViewer(
    {
      images,
      defaultOpen = false,
      isOpen: controlledIsOpen,
      onOpenChange,
      onIndexChange,
      initialIndex = 0,
      children,
    },
    ref
  ) {
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

    useEffect(() => {
      onIndexChange?.(currentIndex);
    }, [currentIndex, onIndexChange]);

    const open = useCallback(() => {
      if (!isControlled) {
        setUncontrolledIsOpen(true);
      }
      onOpenChange?.(true);
    }, [isControlled, onOpenChange]);

    const close = useCallback(() => {
      if (!isControlled) {
        setUncontrolledIsOpen(false);
      }
      onOpenChange?.(false);
    }, [isControlled, onOpenChange]);

    const goNext = useCallback(() => {
      setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
    }, [images.length]);

    const goPrevious = useCallback(() => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const contextValue = React.useMemo(
      () => ({
        images,
        currentIndex,
        isOpen,
        open,
        close,
        goNext,
        goPrevious,
      }),
      [images, currentIndex, isOpen, open, close, goNext, goPrevious]
    );

    return (
      <ImageViewerContext.Provider value={contextValue}>
        <div ref={ref} className="w-full">
          {children}
        </div>
      </ImageViewerContext.Provider>
    );
  }
);

// Trigger Component
const ImageViewerTrigger = React.forwardRef<
  HTMLDivElement,
  ImageViewerTriggerProps
>(function ImageViewerTrigger({ children, onPress, ...props }, ref) {
  const { open } = useImageViewerContext();

  const handlePress = useCallback(() => {
    onPress?.();
    open();
  }, [onPress, open]);

  return (
    <div ref={ref} onClick={handlePress} className="cursor-pointer" {...props}>
      {children}
    </div>
  );
});

// Content Component (The Modal)
const ImageViewerContent = React.forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode }
>(function ImageViewerContent({ children }, ref) {
  const { images, currentIndex, isOpen, close, goNext, goPrevious } =
    useImageViewerContext();
  const currentImage = images[currentIndex];

  // Handle keyboard navigation - must be before any early return
  useEffect(() => {
    if (!isOpen || !currentImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrevious();
      if (e.key === 'ArrowRight') goNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentImage, close, goNext, goPrevious]);

  if (!isOpen || !currentImage) return null;

  return (
    <div className={imageViewerModalStyle({})}>
      <div ref={ref} className={imageViewerContentStyle({})}>
        <img
          src={currentImage.url}
          alt={currentImage.alt || `Image ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain"
        />
        {children}
      </div>
    </div>
  );
});

// Close Button Component
const ImageViewerCloseButton = React.forwardRef<
  HTMLButtonElement,
  { className?: string }
>(function ImageViewerCloseButton({ className, ...props }, ref) {
  const { close } = useImageViewerContext();

  return (
    <button
      ref={ref}
      onClick={close}
      className={imageViewerCloseButtonStyle({ class: className })}
      aria-label="Close image viewer"
      {...props}
    >
      ✕
    </button>
  );
});

// Navigation Component
const ImageViewerNavigation = React.forwardRef<
  HTMLDivElement,
  { className?: string }
>(function ImageViewerNavigation({ className }, ref) {
  const { goPrevious, goNext, currentIndex, images } = useImageViewerContext();

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 1;

  return (
    <div ref={ref} className={imageViewerNavigationStyle({ class: className })}>
      {canGoPrevious && (
        <button
          onClick={goPrevious}
          className={imageViewerNavButtonStyle({})}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}
      <div className="flex-1" />
      {canGoNext && (
        <button
          onClick={goNext}
          className={imageViewerNavButtonStyle({})}
          aria-label="Next image"
        >
          ›
        </button>
      )}
    </div>
  );
});

// Counter Component
const ImageViewerCounter = React.forwardRef<
  HTMLDivElement,
  { className?: string }
>(function ImageViewerCounter({ className }, ref) {
  const { currentIndex, images } = useImageViewerContext();

  return (
    <div ref={ref} className={imageViewerCounterStyle({ class: className })}>
      <span className={imageViewerCounterTextStyle({})}>
        {currentIndex + 1} / {images.length}
      </span>
    </div>
  );
});

export {
  ImageViewer,
  ImageViewerTrigger,
  ImageViewerContent,
  ImageViewerCloseButton,
  ImageViewerNavigation,
  ImageViewerCounter,
};

export type { ImageItem, ImageViewerProps, ImageViewerTriggerProps };
