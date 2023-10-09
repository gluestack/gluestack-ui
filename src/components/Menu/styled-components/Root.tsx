import { UL } from '@expo/html-elements';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
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
    'rounded': '$sm',
    'bg': '$backgroundLight0',
    '_dark': {
      bg: '$backgroundDark900',
    },
    'defaultProps': {
      softShadow: '3',
    },
  },
  {
    componentName: 'Menu',
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
