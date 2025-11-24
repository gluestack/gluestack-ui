import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface AnimatedContentProps {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: number;
  initialScale?: number;
  style?: any;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  isOpen,
  children,
  duration = 200,
  initialScale = 0.95,
  style,
}) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(initialScale);

  useEffect(() => {
    // Both opacity and scale use timing animation
    opacity.value = withTiming(isOpen ? 1 : 0, { duration });
    scale.value = withTiming(isOpen ? 1 : initialScale, { duration });
  }, [isOpen, duration, initialScale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  }, [opacity, scale]);

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};
