'use client';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import {
  View,
  Pressable,
  Text,
  Image as RNImage,
  Dimensions,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withDelay,
  interpolate,
  Extrapolate,
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedImage = Animated.createAnimatedComponent(RNImage);

const imageViewerStyle = tva({
  base: 'w-full',
});

const imageViewerModalStyle = tva({
  base: 'flex-1 bg-black/95',
});

const imageViewerContentStyle = tva({
  base: 'flex-1 justify-center items-center overflow-hidden',
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
  onIndexChange?: (index: number) => void;
  initialIndex?: number;
  children?: React.ReactNode;
}

interface ImageViewerTriggerProps {
  children: React.ReactNode;
  onPress?: () => void;
}

// Single Zoomable Image Component
const ZoomableImage = React.memo(
  React.forwardRef(function ZoomableImage(
    {
      image,
      index,
      currentIndex,
      onSwipeLeft,
      onSwipeRight,
      onDismiss,
      onZoomChange,
    }: {
      image: ImageItem;
      index: number;
      currentIndex: number;
      onSwipeLeft: () => void;
      onSwipeRight: () => void;
      onDismiss: () => void;
      onZoomChange?: (isZoomed: boolean) => void;
    },
    ref
  ) {
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const savedTranslateX = useSharedValue(0);
    const savedTranslateY = useSharedValue(0);
    const dismissProgress = useSharedValue(0);
    const opacity = useSharedValue(1);

    // Notify parent when zoom changes
    useEffect(() => {
      const isZoomed = scale.value > 1;
      if (index === currentIndex && onZoomChange) {
        onZoomChange(isZoomed);
      }
    }, [scale.value, index, currentIndex, onZoomChange]);

    // Expose reset method to parent
    React.useImperativeHandle(ref, () => ({
      resetZoom: () => {
        scale.value = 1;
        savedScale.value = 1;
        translateX.value = 0;
        translateY.value = 0;
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
        if (onZoomChange) {
          onZoomChange(false);
        }
      },
      isZoomed: () => scale.value > 1,
    }));

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
        if (onZoomChange) runOnJS(onZoomChange)(false);
      } else if (scale.value > 4) {
        scale.value = withSpring(4);
        savedScale.value = 4;
        if (onZoomChange) runOnJS(onZoomChange)(true);
      } else {
        savedScale.value = scale.value;
        if (onZoomChange) runOnJS(onZoomChange)(scale.value > 1);
      }
    });

  // Pan gesture for when zoomed - allows free movement with edge detection
  const panGesture = Gesture.Pan()
    .enabled(scale.value > 1)
    .onUpdate((event) => {
      // Calculate max translation bounds for zoomed image
      const maxTranslateX = ((scale.value - 1) * SCREEN_WIDTH) / 2;
      const maxTranslateY = ((scale.value - 1) * SCREEN_HEIGHT * 0.8) / 2;

      // Allow panning within bounds
      const newTranslateX = savedTranslateX.value + event.translationX;
      const newTranslateY = savedTranslateY.value + event.translationY;

      // Clamp to bounds
      translateX.value = Math.max(
        -maxTranslateX,
        Math.min(maxTranslateX, newTranslateX)
      );
      translateY.value = Math.max(
        -maxTranslateY,
        Math.min(maxTranslateY, newTranslateY)
      );
    })
    .onEnd((event) => {
      const maxTranslateX = ((scale.value - 1) * SCREEN_WIDTH) / 2;

      // Check if at horizontal edge and swiped further (outer range offset)
      const isAtRightEdge = translateX.value >= maxTranslateX - 5;
      const isAtLeftEdge = translateX.value <= -maxTranslateX + 5;
      const swipeThreshold = 50;

      // If at edge and swiped with enough velocity/distance, navigate
      if (isAtLeftEdge && event.translationX > swipeThreshold && event.velocityX > 0) {
        // At left edge, swiped right -> go to previous
        runOnJS(onSwipeRight)();
        // Reset zoom after navigation
        scale.value = withSpring(1);
        savedScale.value = 1;
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
        if (onZoomChange) runOnJS(onZoomChange)(false);
      } else if (isAtRightEdge && event.translationX < -swipeThreshold && event.velocityX < 0) {
        // At right edge, swiped left -> go to next
        runOnJS(onSwipeLeft)();
        // Reset zoom after navigation
        scale.value = withSpring(1);
        savedScale.value = 1;
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
        if (onZoomChange) runOnJS(onZoomChange)(false);
      } else {
        // Save position within bounds
        savedTranslateX.value = translateX.value;
        savedTranslateY.value = translateY.value;
      }
    });

  // Vertical pan gesture for dismiss - only when NOT zoomed
  const dismissGesture = Gesture.Pan()
    .enabled(scale.value <= 1)
    .activeOffsetY([-10, 10]) // Activate only for vertical movement
    .failOffsetX([-20, 20]) // Fail if horizontal movement is too much
    .onUpdate((event) => {
      dismissProgress.value =
        Math.abs(event.translationY) / (SCREEN_HEIGHT * 0.3);
      translateY.value = event.translationY;
      opacity.value = interpolate(
        dismissProgress.value,
        [0, 1],
        [1, 0.3],
        Extrapolate.CLAMP
      );
    })
    .onEnd((event) => {
      if (Math.abs(event.translationY) > 120) {
        runOnJS(onDismiss)();
      } else {
        translateY.value = withSpring(0);
        opacity.value = withTiming(1, { duration: 200 });
        dismissProgress.value = withTiming(0, { duration: 200 });
      }
    });

  const lastTapX = useSharedValue(0);
  const lastTapY = useSharedValue(0);

  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onBegin((event) => {
      lastTapX.value = event.x;
      lastTapY.value = event.y;
    })
    .onEnd(() => {
      if (scale.value > 1) {
        scale.value = withSpring(1);
        savedScale.value = 1;
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
        if (onZoomChange) runOnJS(onZoomChange)(false);
      } else {
        const zoomScale = 2.5;
        scale.value = withSpring(zoomScale);
        savedScale.value = zoomScale;

        const centerX = SCREEN_WIDTH / 2;
        const centerY = SCREEN_HEIGHT * 0.4;
        const deltaX = centerX - lastTapX.value;
        const deltaY = centerY - lastTapY.value;
        const targetX = (deltaX * zoomScale) / zoomScale;
        const targetY = (deltaY * zoomScale) / zoomScale;

        translateX.value = withSpring(targetX);
        translateY.value = withSpring(targetY);
        savedTranslateX.value = targetX;
        savedTranslateY.value = targetY;
        if (onZoomChange) runOnJS(onZoomChange)(true);
      }
    });

  const composedGesture = Gesture.Race(
    doubleTapGesture,
    Gesture.Simultaneous(
      pinchGesture,
      Gesture.Exclusive(panGesture, dismissGesture)
    )
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
        <AnimatedImage
          source={{ uri: image.url }}
          alt={image.alt}
          resizeMode="contain"
          style={[
            { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.8 },
            animatedStyle,
          ]}
        />
      </GestureDetector>
    );
  })
);

// FlatList-based Image Gallery Component
const SlidableImageGallery = React.memo(function SlidableImageGallery({
  images,
  currentIndex,
  onIndexChange,
  onDismiss,
}: {
  images: ImageItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onDismiss: () => void;
}) {
  const flatListRef = useRef<FlatList>(null);
  const [localIndex, setLocalIndex] = useState(currentIndex);
  const scrollOffsetRef = useRef(0);
  const imageRefsRef = useRef<Map<number, any>>(new Map());
  const [isCurrentImageZoomed, setIsCurrentImageZoomed] = useState(false);

  // Handle zoom change from current image
  const handleZoomChange = useCallback((isZoomed: boolean) => {
    setIsCurrentImageZoomed(isZoomed);
  }, []);

  // Scroll to index when currentIndex changes from outside (button press)
  useEffect(() => {
    if (currentIndex !== localIndex && flatListRef.current) {
      // Reset zoom on current image before scrolling to new one
      const currentImageRef = imageRefsRef.current.get(localIndex);
      if (currentImageRef?.resetZoom) {
        currentImageRef.resetZoom();
      }

      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
      setLocalIndex(currentIndex);
    }
  }, [currentIndex, localIndex]);

  // Handle scroll - track position without updating state
  const handleScroll = useCallback((event: any) => {
    scrollOffsetRef.current = event.nativeEvent.contentOffset.x;
  }, []);

  // Handle scroll end - update index when scroll completes
  const handleMomentumScrollEnd = useCallback(
    (event: any) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(contentOffsetX / SCREEN_WIDTH);

      if (newIndex !== localIndex && newIndex >= 0 && newIndex < images.length) {
        setLocalIndex(newIndex);
        onIndexChange(newIndex);
      }
    },
    [localIndex, images.length, onIndexChange]
  );

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1);
    }
  }, [currentIndex, images.length, onIndexChange]);

  const goPrevious = useCallback(() => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    }
  }, [currentIndex, onIndexChange]);

  // Render each image item
  const renderItem = useCallback(
    ({ item, index }: { item: ImageItem; index: number }) => (
      <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.8 }}>
        <ZoomableImage
          ref={(ref) => {
            if (ref) {
              imageRefsRef.current.set(index, ref);
            } else {
              imageRefsRef.current.delete(index);
            }
          }}
          image={item}
          index={index}
          currentIndex={localIndex}
          onSwipeLeft={goNext}
          onSwipeRight={goPrevious}
          onDismiss={onDismiss}
          onZoomChange={index === localIndex ? handleZoomChange : undefined}
        />
      </View>
    ),
    [localIndex, goNext, goPrevious, onDismiss, handleZoomChange]
  );

  // Get item layout for better performance
  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    }),
    []
  );

  const keyExtractor = useCallback(
    (item: ImageItem, index: number) => `image-${index}-${item.url}`,
    []
  );

  return (
    <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.8 }}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled={false}
        scrollEnabled={!isCurrentImageZoomed}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        getItemLayout={getItemLayout}
        initialScrollIndex={currentIndex}
        bounces={true}
        scrollEventThrottle={16}
        decelerationRate="normal"
        snapToInterval={SCREEN_WIDTH}
        snapToAlignment="center"
        disableIntervalMomentum={true}
      />
    </View>
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
            <SlidableImageGallery
              images={images}
              currentIndex={currentIndex}
              onIndexChange={(newIndex) => {
                if (newIndex > currentIndex) {
                  goNext();
                } else if (newIndex < currentIndex) {
                  goPrevious();
                }
              }}
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
