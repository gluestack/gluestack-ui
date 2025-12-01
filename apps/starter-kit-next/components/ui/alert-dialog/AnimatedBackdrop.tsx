import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface AnimatedBackdropProps {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: number;
  targetOpacity?: number;
  style?: any;
}

export const AnimatedBackdrop: React.FC<AnimatedBackdropProps> = ({
  isOpen,
  children,
  duration = 200,
  targetOpacity = 1,
  style,
}) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(isOpen ? targetOpacity : 0, { duration });
  }, [isOpen, duration, targetOpacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [opacity]);

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};
