import { UL } from '@expo/html-elements';
import { AnimationResolver } from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';
import { styled } from '@gluestack-style/react';
import { createMotionAnimatedComponent } from '@legendapp/motion';
const MotionUL = createMotionAnimatedComponent(UL);
export const Root = styled(
  MotionUL,
  {
    //@ts-ignore
    ':initial': {
      opacity: 0,
    },
    ':animate': {
      opacity: 1,
    },
    ':exit': {
      opacity: 0,
    },
    ':transition': {
      type: 'spring',
      damping: 18,
      stiffness: 250,
      opacity: {
        type: 'timing',
        duration: 200,
      },
    },
    'minWidth': 200,
    'py': '$2',
    // @ts-ignore
    'rounded': '$sm',
    // @ts-ignore
    'bg': '$backgroundLight.0',
    '_dark': {
      backgroundColor: '$backgroundDark.900',
    },
    'defaultProps': {
      softShadow: '3',
    },
  },
  {
    componentName: 'Menu',
  } as const,
  {
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
