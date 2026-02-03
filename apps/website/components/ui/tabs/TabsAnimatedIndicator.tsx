import React, { useEffect, useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  SharedValue,
} from 'react-native-reanimated';
import type { LayoutData } from '@gluestack-ui GitHub Workflow/core/tabs/creator';
import { tabsAnimationConfig } from './animation-config';
import { Platform } from 'react-native';
import { cssInterop } from 'nativewind';

interface TabsAnimatedIndicatorProps {
  selectedKey: any;
  orientation: 'horizontal' | 'vertical';
  triggerLayouts: Map<any, LayoutData>;
  scrollOffset?: number;
  animatedScrollOffset?: SharedValue<number>;
  className?: string;
  style?: any;
}

cssInterop(Animated.View, {
  className: { target: 'style' },
});

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

    const [hasLayout, setHasLayout] = useState(false); // Fallback shared value for web / non-animated scroll

    const scrollOffsetShared = useSharedValue(scrollOffset);

    useEffect(() => {
      if (!animatedScrollOffset) {
        scrollOffsetShared.value = scrollOffset;
      }
    }, [scrollOffset, animatedScrollOffset, scrollOffsetShared]); /**
     * Update indicator layout
     */

    useEffect(() => {
      const layout = triggerLayouts.get(selectedKey);
      console.log('layout', layout);
      if (!layout || layout.width <= 0) return;

      const isFirst = !hasLayout;
      const duration = isFirst ? 0 : tabsAnimationConfig.indicatorDuration;

      animatedX.value = withDelay(
        20,
        withTiming(layout.x, {
          duration,
          easing: Easing.ease,
        })
      );

      animatedY.value = withTiming(layout.y, {
        duration,
        easing: Easing.ease,
      });

      animatedWidth.value = withTiming(layout.width, {
        duration,
        easing: Easing.ease,
      });

      animatedHeight.value = withTiming(layout.height, {
        duration,
        easing: Easing.ease,
      });

      if (!hasLayout) {
        setHasLayout(true);
      }
    }, [
      selectedKey,
      triggerLayouts,
      hasLayout,
      animatedX,
      animatedY,
      animatedWidth,
      animatedHeight,
    ]); /**
     *  Platform-aware animated style
     */

    const animatedStyle = useAnimatedStyle(() => {
      const scroll = animatedScrollOffset?.value ?? scrollOffsetShared.value;
      console.log(orientation, animatedX.value, scroll);
      const x =
        orientation === 'horizontal'
          ? animatedX.value - scroll
          : animatedX.value; //  WEB: use left/top

      if (Platform.OS === 'web') {
        return {
          left: x,
          top: animatedY.value,
          width: animatedWidth.value,
          height: animatedHeight.value,
        };
      } //  NATIVE: use transform

      return {
        transform: [{ translateX: x }, { translateY: animatedY.value }],
        width: animatedWidth.value,
        height: animatedHeight.value,
      };
    }, [orientation, animatedX, animatedY, animatedWidth, animatedHeight]);

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
            position: 'absolute',
            zIndex: 1,
          },
        ]}
      />
    );
  }
);

TabsAnimatedIndicator.displayName = 'TabsAnimatedIndicator';
