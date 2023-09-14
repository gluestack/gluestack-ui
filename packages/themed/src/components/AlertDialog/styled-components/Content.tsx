//@ts-nocheck
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { styled } from '@gluestack-style/react';
import { Motion } from '@legendapp/motion';

export default styled(
  Motion.View,
  {
    'bg': '$backgroundLight50',
    'rounded': '$lg',
    'overflow': 'hidden',
    //@ts-ignore
    ':initial': {
      scale: 0.9,
      opacity: 0,
    },
    ':animate': {
      scale: 1,
      opacity: 1,
    },
    ':exit': {
      scale: 0.9,
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

    // @ts-ignore
    '_dark': {
      bg: '$backgroundDark900',
    },
    'defaultProps': {
      softShadow: '3',
    },
  },
  {
    componentName: 'AlertDialogContent',
    ancestorStyle: ['_content'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
