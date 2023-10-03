//@ts-nocheck
import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';

export default styled(
  Motion.View,
  {
    'bg': '$muted.50',
    'rounded': '$md',
    'borderWidth': 1,
    'borderColor': '$muted.300',
    'overflow': 'hidden',
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
      bg: '$muted.800',
      borderColor: '$muted.700',
    },

    'defaultProps': {
      shadow: '6',
    },
  },
  { ancestorStyle: ['_content'] }
);
