import { styled } from '@gluestack-style/react';
import {
  AnimationResolver,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';

export default styled(
  AnimatedView,
  {
    // @ts-ignore
    'bg': '$muted.50',
    // @ts-ignore
    'rounded': '$md',
    // @ts-ignore
    'borderWidth': 1,
    'borderColor': '$muted.300',
    'overflow': 'hidden',
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
        duration: 250,
      },
    },
    '_dark': {
      backgroundColor: '$muted.800',
      borderColor: '$muted.700',
    },

    'defaultProps': {
      shadow: '6',
    },
  },
  {
    componentName: 'PopoverContent',
    ancestorStyle: ['_content'],
  } as const,
  {
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
