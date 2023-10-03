//@ts-nocheck
import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';

export default styled(
  Motion.View,
  {
    'bg': '$muted.50',
    'rounded': '$lg',
    'overflow': 'hidden',
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
    '_dark': {
      bg: '$muted.800',
    },

    'defaultProps': {
      shadow: '1',
    },
  },
  { ancestorStyle: ['_content'] }
);
