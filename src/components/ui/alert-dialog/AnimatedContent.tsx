'use client';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
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
  const { visible } = React.useContext(AlertDialogContext);

  if (!visible) {
    return null;
  }

  return (
    <AnimatedView
      ref={ref}
      entering={FadeIn.duration(250)}
      exiting={FadeOut.duration(250)}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </AnimatedView>
  );
});

AnimatedContent.displayName = 'AnimatedContent';
