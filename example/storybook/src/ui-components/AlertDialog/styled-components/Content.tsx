//@ts-nocheck
import { styled } from '../../styled';
import { Motion } from '@legendapp/motion';

export default styled(
  Motion.View,
  {
    'bg': '$backgroundLight50',
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
    'rounded': '$lg',
    'overflow': 'hidden',

    '_dark': {
      bg: '$backgroundDark800',
    },
    'defaultProps': {
      softShadow: '3',
    },
  },
  { ancestorStyle: ['_content'] }
);
