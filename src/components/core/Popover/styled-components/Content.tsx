//@ts-nocheck
import { Motion } from '@legendapp/motion';
import { styled } from '../../styled';

export default styled(
  Motion.View,
  {
    'shadowColor': '$backgroundLight800',
    'bg': '$backgroundLight50',
    //@ts-ignore
    'shadowOffset': {
      width: 0,
      height: 2,
    },

    'shadowOpacity': 0.15,
    'shadowRadius': 3.84,
    'elevation': 5,
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
    '_dark': {
      bg: '$backgroundDark900',
    },
  },
  { ancestorStyle: ['_content'] }
);
