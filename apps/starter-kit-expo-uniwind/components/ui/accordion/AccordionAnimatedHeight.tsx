import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface AnimatedHeightProps {
  isExpanded: boolean;
  children: React.ReactNode;
  duration?: number;
  style?: any;
}

export const AnimatedHeight: React.FC<AnimatedHeightProps> = ({
  isExpanded,
  children,
  duration = 300,
  style,
}) => {
  const measuredHeight = useSharedValue(0);
  const progress = useSharedValue(isExpanded ? 1 : 0);

  const onLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    if (height > 0 && measuredHeight.value !== height) {
      measuredHeight.value = height;
    }
  };

  // Update progress when isExpanded changes
  React.useEffect(() => {
    progress.value = withTiming(isExpanded ? 1 : 0, { duration });
  }, [isExpanded, duration]);

  const animatedStyle = useAnimatedStyle(() => {
    const height = progress.value * measuredHeight.value;
    return {
      height,
      opacity: progress.value,
      overflow: 'hidden',
    };
  }, [progress, measuredHeight]);

  return (
    <Animated.View style={[animatedStyle, style]}>
      <Animated.View
        onLayout={onLayout}
        style={{ position: 'absolute', width: '100%' }}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};
