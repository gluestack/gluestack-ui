'use client';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { cssInterop } from 'nativewind';
import { AlertDialogContext } from '@gluestack-ui/core/alert-dialog/creator';

const AnimatedView = Animated.createAnimatedComponent(View);

cssInterop(AnimatedView, { className: 'style' });

interface AnimatedContentProps extends React.ComponentProps<typeof View> {
  children: React.ReactNode;
  className?: string;
  style?: ViewStyle;
}

export const AnimatedContent = React.forwardRef<
  React.ComponentRef<typeof AnimatedView>,
  AnimatedContentProps
>(({ children, className, style, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  const visible = context?.visible ?? false;
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withTiming(visible ? 360 : 0, { duration: 250 });
  }, [visible, rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  },[rotation]);

  return (
    <AnimatedView
      ref={ref}
      style={[style, animatedStyle]}
      className={className}
      {...props}
    >
      {children}
    </AnimatedView>
  );
});

AnimatedContent.displayName = 'AnimatedContent';
