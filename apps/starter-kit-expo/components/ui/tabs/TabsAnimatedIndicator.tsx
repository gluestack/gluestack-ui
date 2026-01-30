import React, { useEffect, useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  SharedValue,
} from 'react-native-reanimated';
import type { LayoutData } from '@gluestack-ui/core/tabs/creator';
import { tabsAnimationConfig } from './animation-config';

interface TabsAnimatedIndicatorProps {
  selectedKey: any;
  orientation: 'horizontal' | 'vertical';
  triggerLayouts: Map<any, LayoutData>;
  scrollOffset?: number;
  animatedScrollOffset?: SharedValue<number>;
  className?: string;
  style?: any;
}

export const TabsAnimatedIndicator = React.forwardRef<
  any,
  TabsAnimatedIndicatorProps
>(
  (
    {
      selectedKey,
      orientation,
      triggerLayouts,
      scrollOffset = 0,
      animatedScrollOffset,
      className,
      style,
    },
    ref
  ) => {
    const animatedX = useSharedValue(0);
    const animatedY = useSharedValue(0);
    const animatedWidth = useSharedValue(0);
    const animatedHeight = useSharedValue(0);
    const [hasLayout, setHasLayout] = useState(false);

    // Create a shared value for scroll offset to use in worklet
    const scrollOffsetShared = useSharedValue(scrollOffset);

    // Update scroll offset shared value when scrollOffset changes
    useEffect(() => {
      if (!animatedScrollOffset) {
        scrollOffsetShared.value = scrollOffset;
      }
    }, [scrollOffset, scrollOffsetShared, animatedScrollOffset]);

    useEffect(() => {
      if (selectedKey && triggerLayouts.has(selectedKey)) {
        const layout = triggerLayouts.get(selectedKey);

        if (layout && layout.width > 0) {
          // Determine if this is the first time we're setting values
          const isFirstRender = !hasLayout;
          const duration = isFirstRender
            ? 0
            : tabsAnimationConfig.indicatorDuration;

          // Store the absolute x position (not adjusted for scroll)
          animatedX.value = withDelay(
            20,
            withTiming(layout.x, {
              duration: duration,
              easing: Easing.ease,
            })
          );
          animatedY.value = withTiming(layout.y, {
            duration: duration,
            easing: Easing.ease,
          });
          animatedWidth.value = withTiming(layout.width, {
            duration: duration,
            easing: Easing.ease,
          });
          animatedHeight.value = withTiming(layout.height, {
            duration: duration,
            easing: Easing.ease,
          });

          if (!hasLayout) {
            setHasLayout(true);
          }
        }
      }
    }, [
      selectedKey,
      triggerLayouts,
      hasLayout,
      animatedX,
      animatedY,
      animatedWidth,
      animatedHeight,
    ]);

    const animatedStyle = useAnimatedStyle(() => {
      'worklet';
      // Use animated scroll offset if available for smooth synchronization
      const scrollOffsetValue = animatedScrollOffset
        ? animatedScrollOffset.value
        : scrollOffsetShared.value;

      if (orientation === 'horizontal') {
        return {
          transform: [
            { translateX: animatedX.value - scrollOffsetValue },
            { translateY: animatedY.value },
          ],
          width: animatedWidth.value,
          height: animatedHeight.value,
        };
      } else {
        return {
          transform: [
            { translateY: animatedY.value },
            { translateX: animatedX.value },
          ],
          height: animatedHeight.value,
          width: animatedWidth.value,
        };
      }
    }, [orientation]);

    // Don't render indicator until we have valid layout data
    if (!hasLayout) {
      return null;
    }

    return (
      <Animated.View
        ref={ref}
        className={className}
        style={[
          animatedStyle,
          style,
          {
            borderWidth: 2,
            borderColor: 'red',
            position: 'absolute',
          },
        ]}
      />
    );
  }
);

TabsAnimatedIndicator.displayName = 'TabsAnimatedIndicator';
