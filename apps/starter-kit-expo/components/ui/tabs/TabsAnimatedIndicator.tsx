import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import type { LayoutData } from '@gluestack-ui/core/tabs/creator';
import { tabsAnimationConfig } from './animation-config';

interface TabsAnimatedIndicatorProps {
  selectedKey: any;
  orientation: 'horizontal' | 'vertical';
  triggerLayouts: Map<any, LayoutData>;
  scrollOffset?: number;
  className?: string;
  style?: any;
}

export const TabsAnimatedIndicator = React.forwardRef<
  any,
  TabsAnimatedIndicatorProps
>(
  (
    { selectedKey, orientation, triggerLayouts, scrollOffset = 0, className, style, ...props },
    ref
  ) => {
    const animatedX = useSharedValue(0);
    const animatedY = useSharedValue(0);
    const animatedWidth = useSharedValue(0);
    const animatedHeight = useSharedValue(0);
    const [hasLayout, setHasLayout] = useState(false);

    useEffect(() => {
      if (selectedKey && triggerLayouts.has(selectedKey)) {
        const layout = triggerLayouts.get(selectedKey);

        if (layout && layout.width > 0) {
          // Determine if this is the first time we're setting values
          const isFirstRender = !hasLayout;
          const duration = isFirstRender
            ? 0
            : tabsAnimationConfig.indicatorDuration;

          // Adjust x position by scroll offset to get position relative to visible viewport
          const adjustedX = layout.x - scrollOffset;
console.log(adjustedX,"adjustedX")
console.log(layout.x,"layout.x")
console.log(scrollOffset,"scrollOffset")
          animatedX.value = withDelay(50, withTiming(adjustedX, { duration }));
          animatedY.value = withTiming(layout.y, { duration });
          animatedWidth.value = withTiming(layout.width, { duration });
          animatedHeight.value = withTiming(layout.height, { duration });

          if (!hasLayout) {
            setHasLayout(true);
          }
        }
      }

    }, [
      selectedKey,
      triggerLayouts,
      scrollOffset,
      hasLayout,
      animatedX,
      animatedY,
      animatedWidth,
      animatedHeight,
    ]);

    const animatedStyle = useAnimatedStyle(() => {
      if (orientation === 'horizontal') {
        return {
          transform: [{ translateX: animatedX.value }, { translateY: animatedY.value }],
          width: animatedWidth.value,
          height: animatedHeight.value,
        };
      } else {
        return {
          transform: [{ translateY: animatedY.value }, { translateX: animatedX.value }],
          height: animatedHeight.value,
          width: animatedWidth.value,
        };
      }
    }, [
      animatedX.value,
      animatedY.value,
      animatedWidth.value,
      animatedHeight.value,
    ]);

    // Don't render indicator until we have valid layout data
    if (!hasLayout) {
      return null;
    }

    return (
      <Animated.View
      className={className}
        style={[
          animatedStyle,

          {
 
            position: 'absolute',
          
          },
        ]}
      >
      
      </Animated.View>
    );
  }
);

TabsAnimatedIndicator.displayName = 'TabsAnimatedIndicator';
