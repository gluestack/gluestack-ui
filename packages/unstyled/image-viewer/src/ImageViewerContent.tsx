import React, { forwardRef, useContext, useEffect } from 'react';
import { ImageViewerContext } from './ImageViewerContext';
import {
  Easing,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import type { InterfaceImageViewerContentProps } from './types';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const DOUBLE_TAP_DELAY = 300;

const ImageViewerContent = (
  StyledGestureHandlerRootView: any,
  StyledGestureDetector: any,
  StyledAnimated: any,
  Gesture: any
) =>
  forwardRef(
    (
      {
        images,
        renderImages,
        keyExtractor,
        children,
      }: InterfaceImageViewerContentProps & { children: React.ReactNode },
      ref?: any
    ) => {
      const { onClose, setScale }: any = useContext(ImageViewerContext);
      const scale = useSharedValue(1);
      const savedScale = useSharedValue(1);
      const translateX = useSharedValue(0);
      const translateY = useSharedValue(0);
      const focalX = useSharedValue(0);
      const focalY = useSharedValue(0);
      const lastTranslateX = useSharedValue(0);
      const lastTranslateY = useSharedValue(0);
      const isPinching = useSharedValue(false);
      const imageWidth = useSharedValue(0);
      const imageHeight = useSharedValue(0);

      useEffect(() => {
        if (scale.value === 1) {
          isPinching.value = false;
        }
      }, [scale.value, isPinching]);

      const pinchGesture = Gesture.Pinch()
        .onStart(() => {
          isPinching.value = true;
          savedScale.value = scale.value;
        })
        .onUpdate((event: any) => {
          // Apply the new scale based on the saved scale value
          const newScale = savedScale.value * event.scale;
          scale.value = Math.min(Math.max(newScale, 0.3), 10);
          focalX.value = event.focalX;
          focalY.value = event.focalY;
        })
        .onEnd(() => {
          if (scale.value < 1) {
            scale.value = 1;
            savedScale.value = 1;
          }
          if (scale.value < 0.9) {
            runOnJS(onClose)();
          } else {
            savedScale.value = scale.value;
          }
        });

      const doubleTapGesture = Gesture.Tap()
        .numberOfTaps(2)
        .maxDuration(DOUBLE_TAP_DELAY)
        .onStart((event: any) => {
          if (scale.value > 1) {
            // Reset to normal
            scale.value = withTiming(1, { easing: Easing.ease });
            savedScale.value = 1;
            translateX.value = 0;
            translateY.value = 0;
          } else {
            // Zoom in to 2x
            scale.value = withTiming(2, { easing: Easing.ease });
            savedScale.value = 2;

            // Calculate the scaled dimensions at 2x
            const scaledWidth = imageWidth.value * 2;
            const scaledHeight = imageHeight.value * 2;

            // Calculate tap point relative to center
            const centerX = SCREEN_WIDTH / 2;
            const centerY = SCREEN_HEIGHT / 2;
            const focusX = event.x - centerX;
            const focusY = event.y - centerY;

            // Calculate maximum allowed translation
            const maxTranslateX = Math.max(0, (scaledWidth - SCREEN_WIDTH) / 2);
            const maxTranslateY = Math.max(
              0,
              (scaledHeight - SCREEN_HEIGHT) / 2
            );

            // Apply bounded translation
            translateX.value = Math.max(
              -maxTranslateX,
              Math.min(maxTranslateX, -focusX)
            );
            translateY.value = Math.max(
              -maxTranslateY,
              Math.min(maxTranslateY, -focusY)
            );
          }
        });

      const panGesture = Gesture.Pan()
        .onStart(() => {
          lastTranslateX.value = translateX.value;
          lastTranslateY.value = translateY.value;
        })
        .onUpdate((event: any) => {
          if (scale.value > 1) {
            // Calculate the scaled dimensions
            const scaledWidth = imageWidth.value * scale.value;
            const scaledHeight = imageHeight.value * scale.value;

            // Calculate the maximum allowed translation based on scaled dimensions
            const maxTranslateX = Math.max(0, (scaledWidth - SCREEN_WIDTH) / 2);
            const maxTranslateY = Math.max(
              0,
              (scaledHeight - SCREEN_HEIGHT) / 2
            );

            // Calculate new positions with bounds
            const newTranslateX = lastTranslateX.value + event.translationX;
            const newTranslateY = lastTranslateY.value + event.translationY;

            // Apply bounds with smooth clamping
            translateX.value = Math.max(
              -maxTranslateX,
              Math.min(maxTranslateX, newTranslateX)
            );
            translateY.value = Math.max(
              -maxTranslateY,
              Math.min(maxTranslateY, newTranslateY)
            );
          } else {
            // When not zoomed in, allow dragging to dismiss
            translateX.value = event.translationX;
            translateY.value = event.translationY;
            if (!isPinching.value) {
              scale.value = withSpring(
                Math.max(0.5, 1 - Math.abs(event.translationY) / SCREEN_HEIGHT)
              );
            }
          }
        })
        .onEnd((event: any) => {
          if (scale.value <= 1) {
            if (Math.abs(event.translationY) > SCREEN_HEIGHT * 0.03) {
              runOnJS(onClose)();
            } else {
              // Reset position
              translateX.value = 0;
              translateY.value = 0;
              scale.value = 1;
              savedScale.value = 1;
            }
          } else {
            // Calculate final bounds for zoomed state
            const scaledWidth = imageWidth.value * scale.value;
            const scaledHeight = imageHeight.value * scale.value;

            const maxTranslateX = Math.max(0, (scaledWidth - SCREEN_WIDTH) / 2);
            const maxTranslateY = Math.max(
              0,
              (scaledHeight - SCREEN_HEIGHT) / 2
            );

            // ensure position stays within bounds
            translateX.value = Math.max(
              -maxTranslateX,
              Math.min(maxTranslateX, translateX.value)
            );
            translateY.value = Math.max(
              -maxTranslateY,
              Math.min(maxTranslateY, translateY.value)
            );
          }
        });

      const composedGesture = Gesture.Race(
        doubleTapGesture,
        Gesture.Simultaneous(pinchGesture, panGesture)
      );

      // This type error is coming from reanimated and react native types itself
      // https://github.com/software-mansion/react-native-reanimated/issues/4548
      // @ts-ignore
      const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
          ],
        };
      });

      // Add a separate worklet to handle scale changes
      useAnimatedReaction(
        () => scale.value,
        (currentScale) => {
          runOnJS(setScale)(currentScale);
        },
        [scale.value]
      );

      return (
        <StyledGestureHandlerRootView ref={ref}>
          {children}
          <StyledGestureDetector gesture={composedGesture}>
            <StyledAnimated style={animatedStyle}>
              {images.slice(0, 1).map((item: any, index: number) => {
                const RenderImage = renderImages;
                return (
                  <RenderImage
                    key={keyExtractor ? keyExtractor(item, index) : index}
                    item={item}
                    index={index}
                    onLoad={(event) => {
                      if (event.nativeEvent) {
                        const { width, height } = event.nativeEvent.source;
                        // Calculate scaled dimensions to fit screen while maintaining aspect ratio
                        let scaledWidth = width;
                        let scaledHeight = height;
                        const screenRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
                        const imageRatio = width / height;
                        if (imageRatio > screenRatio) {
                          // Image is wider than screen ratio
                          scaledWidth = SCREEN_WIDTH;
                          scaledHeight = SCREEN_WIDTH / imageRatio;
                        } else {
                          // Image is taller than screen ratio
                          scaledHeight = SCREEN_HEIGHT;
                          scaledWidth = SCREEN_HEIGHT * imageRatio;
                        }
                        imageWidth.value = scaledWidth;
                        imageHeight.value = scaledHeight;
                      }
                    }}
                  />
                );
              })}
            </StyledAnimated>
          </StyledGestureDetector>
        </StyledGestureHandlerRootView>
      );
    }
  );

export default ImageViewerContent;
