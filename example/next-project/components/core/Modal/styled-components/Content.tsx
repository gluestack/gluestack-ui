import { Motion } from '@legendapp/motion';
import { styled } from '../../styled';

export default styled(
  Motion.View,
  {
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
    'bg': '$backgroundLight50',
    'shadowColor': '$backgroundLight800',
    //@ts-ignore
    'shadowOffset': {
      width: 0,
      height: 3,
    },
    'shadowOpacity': 0.27,
    'shadowRadius': 4.65,
    'elevation': 6,
    'rounded': '$lg',
    'overflow': 'hidden',

    '_dark': {
      bg: '$backgroundDark900',
    },
    'variants': {},
  },
  { ancestorStyle: ['_content'] }
);
