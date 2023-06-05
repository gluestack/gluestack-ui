//@ts-nocheck
import { styled } from '../../styled';
import { Motion } from '@legendapp/motion';

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

    'shadowOpacity': 0.15,
    'shadowRadius': 3.84,
    'elevation': 5,
    'rounded': '$lg',
    'overflow': 'hidden',

    '_dark': {
      bg: '$backgroundDark800',
    },
  },
  { ancestorStyle: ['_content'] }
);
