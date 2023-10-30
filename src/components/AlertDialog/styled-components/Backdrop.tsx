import {
  AnimationResolver,
  AnimatedPressable,
} from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';
import { styled } from '@gluestack-style/react';

export default styled(
  AnimatedPressable,
  {
    //@ts-ignore
    ':initial': {
      opacity: 0,
    },
    ':animate': {
      opacity: 0.5,
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
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'right': 0,
    'bottom': 0,
    // @ts-ignore
    'bg': '$muted.900',
    '_dark': {
      backgroundColor: '$muted.900',
    },
    '_web': {
      cursor: 'default',
    },
  },
  {
    ancestorStyle: ['_backdrop'],
    componentName: 'AlertDialogBackdrop',
  } as const,
  {
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
