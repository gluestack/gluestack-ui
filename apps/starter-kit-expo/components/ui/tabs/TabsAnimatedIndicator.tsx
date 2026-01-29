import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import type { LayoutData } from '@gluestack-ui/core/tabs/creator';
import { tabsAnimationConfig } from './animation-config';

interface TabsAnimatedIndicatorProps {
  selectedKey: any;
  orientation: 'horizontal' | 'vertical';
  triggerLayouts: Map<any, LayoutData>;
  className?: string;
  style?: any;
}

export const TabsAnimatedIndicator = React.forwardRef<
  any,
  TabsAnimatedIndicatorProps
>(
  (
    { selectedKey, orientation, triggerLayouts, className, style, ...props },
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

          animatedX.value = withTiming(layout.x, { duration });
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
      hasLayout,
      animatedX,
      animatedY,
      animatedWidth,
      animatedHeight,
    ]);

    const animatedStyle = useAnimatedStyle(() => {
      if (orientation === 'horizontal') {

        return {
          transform: [{ translateX: animatedX.value },{translateY:animatedY.value}],
          width: animatedWidth.value,
          height: '100%',
        };
      } else {
        return {
          transform: [{ translateY: animatedY.value },{translateX:animatedX.value}],
          height: animatedHeight.value,
          width: '100%',
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
        style={[
          animatedStyle,

          {
       
            position: 'absolute',
            borderRadius: 9999,
          },
        ]}
      >
        <View className={className} />
      </Animated.View>
    );
  }
);

TabsAnimatedIndicator.displayName = 'TabsAnimatedIndicator';
