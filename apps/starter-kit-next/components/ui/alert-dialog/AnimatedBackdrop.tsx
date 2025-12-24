'use client';
import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import { cssInterop } from 'nativewind';
import { AlertDialogContext } from '@gluestack-ui/core/alert-dialog/creator';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

cssInterop(AnimatedPressable, { className: 'style' });

interface AnimatedBackdropProps extends PressableProps {
  className?: string;
  style?: ViewStyle;
}

export const AnimatedBackdrop = React.forwardRef<
  React.ComponentRef<typeof AnimatedPressable>,
  AnimatedBackdropProps
>(({ children, className, style, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  const visible = context?.visible ?? false;
  const [shouldRender, setShouldRender] = React.useState(visible);

  React.useEffect(() => {
    if (visible) {
      setShouldRender(true);
    } else if (shouldRender) {
      // Keep mounted for exit animation on web
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visible, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <AnimatedPressable
      ref={ref}
      entering={FadeIn.duration(250).withInitialValues({ opacity: 0 })}
      exiting={FadeOut.duration(250)}
      style={{backgroundColor:'blue',width:900,height:900}}
      // className={className}
      {...props}
    >
      {children}
    </AnimatedPressable>
  );
});

AnimatedBackdrop.displayName = 'AnimatedBackdrop';
