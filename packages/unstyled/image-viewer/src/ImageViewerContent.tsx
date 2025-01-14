import React, { forwardRef, useContext } from 'react';
import { ImageViewerContext } from './ImageViewerContext';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Dimensions, StatusBar } from 'react-native';
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

      const pinchGesture = Gesture.Pinch()
        .onStart(() => {
          savedScale.value = scale.value;
        })
        .onUpdate((event: any) => {
          // Apply the new scale based on the saved scale value
          const newScale = savedScale.value * event.scale;
          scale.value = Math.min(Math.max(newScale, 0.5), 10);
          focalX.value = event.focalX;
          focalY.value = event.focalY;
        })
        .onEnd(() => {
          if (scale.value < 1) {
            scale.value = withSpring(1);
            savedScale.value = 1;
          } else {
            savedScale.value = scale.value;
          }
        });

      const doubleTapGesture = Gesture.Tap()
        .numberOfTaps(2)
        .maxDuration(DOUBLE_TAP_DELAY)
        .onStart((event: any) => {
          if (scale.value > 1) {
            // If already zoomed in, reset to normal
            scale.value = withTiming(1);
            savedScale.value = 1;
            translateX.value = withTiming(0);
            translateY.value = withTiming(0);
          } else {
            // Zoom in to 2x at the tap location
            scale.value = withTiming(2);
            savedScale.value = 2;

            // Calculate the focal point for zooming
            const centerX = SCREEN_WIDTH / 2;
            const centerY = SCREEN_HEIGHT / 2;
            const focusX = event.x - centerX;
            const focusY = event.y - centerY;

            // Adjust translation to zoom into the tapped point
            translateX.value = withTiming(-focusX);
            translateY.value = withTiming(-focusY);
          }
        });

      const panGesture = Gesture.Pan()
        .onStart(() => {
          // Store the current translation values when starting the pan
          lastTranslateX.value = translateX.value;
          lastTranslateY.value = translateY.value;
        })
        .onUpdate((event: any) => {
          if (scale.value > 1) {
            // When zoomed in, allow panning within bounds
            // Calculate new positions based on the start position plus the new translation
            translateX.value = lastTranslateX.value + event.translationX;
            translateY.value = lastTranslateY.value + event.translationY;
          } else {
            // Normal swipe behavior when not zoomed
            if (Math.abs(event.translationY) > Math.abs(event.translationX)) {
              translateY.value = event.translationY;
              scale.value = Math.max(
                0.5,
                1 - Math.abs(event.translationY) / SCREEN_HEIGHT
              );
            }
          }
        })
        .onEnd((event: any) => {
          if (scale.value <= 1) {
            if (Math.abs(event.translationY) > SCREEN_HEIGHT * 0.005) {
              runOnJS(onClose)();
            }
          }

          // Reset position if not zoomed
          if (scale.value <= 1) {
            translateX.value = 0;
            translateY.value = withSpring(0);
            scale.value = withSpring(1);
            savedScale.value = 1;
          } else {
            // When zoomed, bound the pan values
            const maxTranslateX = ((scale.value - 1) * SCREEN_WIDTH) / 2;
            const maxTranslateY = ((scale.value - 1) * SCREEN_HEIGHT) / 2;

            translateX.value = withSpring(
              Math.min(
                Math.max(translateX.value, -maxTranslateX),
                maxTranslateX
              )
            );
            translateY.value = withSpring(
              Math.min(
                Math.max(translateY.value, -maxTranslateY),
                maxTranslateY
              )
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
        runOnJS(setScale)(scale.value);
        if (scale.value <= 1) {
        }
        return {
          transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
          ],
        };
      });

      return (
        <StyledGestureHandlerRootView ref={ref}>
          <StatusBar hidden={true} />
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
