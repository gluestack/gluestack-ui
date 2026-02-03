import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
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
import { cssInterop } from 'nativewind';

/* -------------------------------------------------- */
/* Animated View (REQUIRED for native)                */
/* -------------------------------------------------- */

const AnimatedView = Animated.createAnimatedComponent(View);

/* -------------------------------------------------- */
/* NativeWind interop (REQUIRED for web)              */
/* -------------------------------------------------- */
if (Platform.OS === 'web') {
  cssInterop(AnimatedView, {
    className: { target: 'style' },
  });
}

/* -------------------------------------------------- */

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
  View,
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
    /* ---------------------------------------------- */
    /* Shared values                                  */
    /* ---------------------------------------------- */

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const width = useSharedValue(0);
    const height = useSharedValue(0);

    const [hasLayout, setHasLayout] = useState(false);

    /* ---------------------------------------------- */
    /* Scroll offset fallback (web / non-reanimated)  */
    /* ---------------------------------------------- */

    const scrollFallback = useSharedValue(scrollOffset);

    useEffect(() => {
      if (!animatedScrollOffset) {
        scrollFallback.value = scrollOffset;
      }
    }, [scrollOffset, animatedScrollOffset]);

    /* ---------------------------------------------- */
    /* Update indicator position                      */
    /* ---------------------------------------------- */

    useEffect(() => {
      const layout = triggerLayouts.get(selectedKey);
      if (!layout || layout.width <= 0 || layout.height <= 0) return;

      const isFirst = !hasLayout;
      const duration = isFirst ? 0 : tabsAnimationConfig.indicatorDuration;

      translateX.value = withDelay(
        isFirst ? 0 : 20,
        withTiming(layout.x, {
          duration,
          easing: Easing.ease,
        })
      );

      translateY.value = withTiming(layout.y, {
        duration,
        easing: Easing.ease,
      });

      width.value = withTiming(layout.width, {
        duration,
        easing: Easing.ease,
      });

      height.value = withTiming(layout.height, {
        duration,
        easing: Easing.ease,
      });

      if (!hasLayout) {
        setHasLayout(true);
      }
    }, [selectedKey, triggerLayouts, hasLayout]);

    /* ---------------------------------------------- */
    /* Animated style (TRANSFORM ONLY)                */
    /* ---------------------------------------------- */

    const animatedStyle = useAnimatedStyle(() => {
      const scroll = animatedScrollOffset?.value ?? scrollFallback.value;

      const x =
        orientation === 'horizontal'
          ? translateX.value - scroll
          : translateX.value;

      return {
        transform: [{ translateX: x }, { translateY: translateY.value }],
        width: width.value,
        height: height.value,
      };
    }, [orientation,translateX,translateY,width,height]);

    /* ---------------------------------------------- */

    if (!hasLayout) {
      return null;
    }

    return (
      <AnimatedView
        ref={ref}
        className={className}
        style={[
          {
            position: 'absolute',
            left: 0, // 🔑 IMPORTANT: reset base position
            top: 0, // 🔑 makes transform identical on web & native
            zIndex: 1,
          },
          animatedStyle,
          style,
        ]}
      />
    );
  }
);

TabsAnimatedIndicator.displayName = 'TabsAnimatedIndicator';
