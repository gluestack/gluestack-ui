'use client';
import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Pressable,
  Text,
  Image as RNImage,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  Extrapolate,
  FadeIn,
  FadeOut,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { cssInterop } from 'nativewind';
import { Image as GluestackImage } from '../image';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Create animated components - no cssInterop needed for animated components
const AnimatedView = Animated.createAnimatedComponent(View);

// Create animated image without cssInterop - use style prop directly
const ReanimatedImage = Animated.createAnimatedComponent(RNImage);

/** Styles */
const imageViewerStyle = tva({
  base: 'w-full h-full',
});

const imageViewerModalStyle = tva({
  base: 'flex-1 bg-black',
});

const imageViewerContentStyle = tva({
  base: 'flex-1 justify-center items-center',
});

const imageViewerCloseButtonStyle = tva({
  base: 'absolute top-12 right-4 z-50 w-10 h-10 rounded-full bg-black/60 justify-center items-center',
});

const imageViewerNavigationStyle = tva({
  base: 'absolute inset-0 flex-row justify-between items-center px-2',
});

const imageViewerNavButtonStyle = tva({
  base: 'w-12 h-12 rounded-full bg-black/50 justify-center items-center',
});

const imageViewerCounterStyle = tva({
  base: 'absolute bottom-12 left-0 right-0 items-center',
});

const imageViewerCounterTextStyle = tva({
  base: 'text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full',
});

interface ImageItem {
  url: string;
  alt?: string;
}

interface ImageViewerProps {
  images: ImageItem[];
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  initialIndex?: number;
  children?: React.ReactNode;
}

interface ImageViewerTriggerProps {
  children: React.ReactNode;
  onPress?: () => void;
}

// Zoomable Image Component
const ZoomableImage = React.memo(function ZoomableImage({
  uri,
  alt,
  onSwipeLeft,
  onSwipeRight,
  onDismiss,
}: {
  uri: string;
  alt?: string;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onDismiss: () => void;
}) {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedTranslateX = useSharedValue(0);
  const savedTranslateY = useSharedValue(0);
  const dismissProgress = useSharedValue(0);
  const opacity = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = savedScale.value * event.scale;
    })
    .onEnd(() => {
      if (scale.value < 1) {
        scale.value = withSpring(1);
        savedScale.value = 1;
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
      } else if (scale.value > 4) {
        scale.value = withSpring(4);
        savedScale.value = 4;
      } else {
        savedScale.value = scale.value;
      }
    });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (scale.value > 1) {
        translateX.value = savedTranslateX.value + event.translationX;
        translateY.value = savedTranslateY.value + event.translationY;
      } else {
        dismissProgress.value =
          Math.abs(event.translationY) / (SCREEN_HEIGHT * 0.3);
        translateY.value = event.translationY;
        opacity.value = interpolate(
          dismissProgress.value,
          [0, 1],
          [1, 0.3],
          Extrapolate.CLAMP
        );
      }
    })
    .onEnd((event) => {
      if (scale.value > 1) {
        savedTranslateX.value = translateX.value;
        savedTranslateY.value = translateY.value;
      } else {
        if (Math.abs(event.translationY) > 120) {
          runOnJS(onDismiss)();
        } else {
          translateY.value = withSpring(0);
          opacity.value = withTiming(1, { duration: 200 });
          dismissProgress.value = withTiming(0, { duration: 200 });
        }

        // Horizontal swipe for navigation
        const swipeThreshold = SCREEN_WIDTH * 0.15; // 15% of screen width
        if (event.translationX > swipeThreshold) {
          // Swipe right - go to previous image
          runOnJS(onSwipeRight)();
        } else if (event.translationX < -swipeThreshold) {
          // Swipe left - go to next image
          runOnJS(onSwipeLeft)();
        }
      }
    });

  // Store last tap position for double-tap zoom
  const lastTapX = useSharedValue(0);
  const lastTapY = useSharedValue(0);

  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onBegin((event) => {
      // Capture tap location when double tap starts
      lastTapX.value = event.x;
      lastTapY.value = event.y;
    })
    .onEnd(() => {
      if (scale.value > 1) {
        // Zoom out to center
        scale.value = withSpring(1);
        savedScale.value = 1;
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
      } else {
        // Zoom in to tap point
        const zoomScale = 2.5;
        scale.value = withSpring(zoomScale);
        savedScale.value = zoomScale;

        // Calculate translation to center the tap point
        // The tap point is relative to the view (0,0 is top-left)
        // Center of view is at (SCREEN_WIDTH/2, SCREEN_HEIGHT*0.4)
        const centerX = SCREEN_WIDTH / 2;
        const centerY = SCREEN_HEIGHT * 0.4;

        // Calculate how much to translate to center the tap point
        // If tap is at (100, 100) and we want to zoom to 2.5x
        // We need to shift the image so that (100, 100) moves to center
        const deltaX = centerX - lastTapX.value;
        const deltaY = centerY - lastTapY.value;

        // Apply translation (multiply by scale factor since we're zooming)
        const targetX = (deltaX * (zoomScale )) / zoomScale;
        const targetY = (deltaY * (zoomScale )) / zoomScale;

        translateX.value = withSpring(targetX);
        translateY.value = withSpring(targetY);
        savedTranslateX.value = targetX;
        savedTranslateY.value = targetY;
      }
    });

  const composedGesture = Gesture.Simultaneous(
    pinchGesture,
    Gesture.Exclusive(panGesture, doubleTapGesture)
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <ReanimatedImage
        source={{ uri }}
        alt={alt}
        resizeMode="contain"
        style={[
          { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.8 },
          animatedStyle,
        ]}
      />
    </GestureDetector>
  );
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
const ImageViewer = React.forwardRef<View, ImageViewerProps>(
  function ImageViewer(
    {
      images,
      defaultOpen = false,
      isOpen: controlledIsOpen,
      onOpenChange,
      initialIndex = 0,
      children,
    },
    ref
  ) {
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

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
        <View ref={ref} className={imageViewerStyle({})}>
          {children}
        </View>
      </ImageViewerContext.Provider>
    );
  }
);

// Trigger Component
const ImageViewerTrigger = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ImageViewerTriggerProps
>(function ImageViewerTrigger({ children, onPress, ...props }, ref) {
  const { open } = useImageViewerContext();

  const handlePress = useCallback(() => {
    onPress?.();
    open();
  }, [onPress, open]);

  return (
    <Pressable ref={ref} onPress={handlePress} {...props}>
      {children}
    </Pressable>
  );
});

// Content Component (The Modal)
const ImageViewerContent = React.forwardRef<
  View,
  { children?: React.ReactNode }
>(function ImageViewerContent({ children }, ref) {
  const { images, currentIndex, isOpen, close, goNext, goPrevious } =
    useImageViewerContext();
  const currentImage = images[currentIndex];

  if (!isOpen || !currentImage) return null;

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="none"
      onRequestClose={close}
      statusBarTranslucent
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AnimatedView
          entering={FadeIn.duration(300).easing(Easing.out(Easing.ease))}
          exiting={FadeOut.duration(200).easing(Easing.in(Easing.ease))}
          className={imageViewerModalStyle({})}
        >
          <View ref={ref} className={imageViewerContentStyle({})}>
            <ZoomableImage
              uri={currentImage.url}
              alt={currentImage.alt}
              onSwipeLeft={goNext}
              onSwipeRight={goPrevious}
              onDismiss={close}
            />
            {children}
          </View>
        </AnimatedView>
      </GestureHandlerRootView>
    </Modal>
  );
});

// Close Button Component
const ImageViewerCloseButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  { className?: string }
>(function ImageViewerCloseButton({ className, ...props }, ref) {
  const { close } = useImageViewerContext();

  return (
    <TouchableOpacity
      ref={ref}
      onPress={close}
      className={imageViewerCloseButtonStyle({ class: className })}
      accessibilityLabel="Close image viewer"
      accessibilityRole="button"
      {...props}
    >
      <Text className="text-white text-xl font-bold">✕</Text>
    </TouchableOpacity>
  );
});

// Navigation Component
const ImageViewerNavigation = React.forwardRef<View, { className?: string }>(
  function ImageViewerNavigation({ className }, ref) {
    const { goPrevious, goNext, currentIndex, images } =
      useImageViewerContext();

    const canGoPrevious = currentIndex > 0;
    const canGoNext = currentIndex < images.length - 1;

    return (
      <View
        ref={ref}
        className={imageViewerNavigationStyle({ class: className })}
      >
        {canGoPrevious && (
          <TouchableOpacity
            onPress={goPrevious}
            className={imageViewerNavButtonStyle({})}
            accessibilityLabel="Previous image"
            accessibilityRole="button"
          >
            <Text className="text-white text-2xl font-bold">‹</Text>
          </TouchableOpacity>
        )}
        <View className="flex-1" />
        {canGoNext && (
          <TouchableOpacity
            onPress={goNext}
            className={imageViewerNavButtonStyle({})}
            accessibilityLabel="Next image"
            accessibilityRole="button"
          >
            <Text className="text-white text-2xl font-bold">›</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
);

// Counter Component
const ImageViewerCounter = React.forwardRef<View, { className?: string }>(
  function ImageViewerCounter({ className }, ref) {
    const { currentIndex, images } = useImageViewerContext();

    return (
      <View ref={ref} className={imageViewerCounterStyle({ class: className })}>
        <Text className={imageViewerCounterTextStyle({})}>
          {currentIndex + 1} / {images.length}
        </Text>
      </View>
    );
  }
);

export {
  ImageViewer,
  ImageViewerTrigger,
  ImageViewerContent,
  ImageViewerCloseButton,
  ImageViewerNavigation,
  ImageViewerCounter,
};

export type { ImageItem, ImageViewerProps, ImageViewerTriggerProps };
