import { styled } from '@gluestack-style/react';
import {
  AnimationResolver,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';

export default styled(
  AnimatedView,
  {
    //@ts-ignore
    ':initial': {
      opacity: 0,
      scale: 0.5,
    },
    ':animate': {
      opacity: 1,
      scale: 1,
    },
    ':exit': {
      opacity: 0,
      scale: 0.5,
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

    'py': '$1',
    'px': '$2',
    // @ts-ignore
    'borderRadius': '$sm',

    // @ts-ignore
    'bg': '$muted.800',
    '_text': {
      // @ts-ignore
      fontSize: '$sm',
      color: '$text.50',
    },

    '_dark': {
      backgroundColor: '$muted.50',
      _text: {
        color: '$text.900',
      },
    },
    'defaultProps': {
      shadow: '6',
    },
  },
  {
    componentName: 'TooltipContent',
    descendantStyle: ['_text'],
  } as const,
  {
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
