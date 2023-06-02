import { styled } from '../../styled';
import { Motion } from '@legendapp/motion';

export default styled(
  Motion.View,
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

    'py': '$1',
    'px': '$3',
    'borderRadius': '$sm',
    'bg': '$backgroundLight900',

    '_text': {
      fontSize: '$xs',
      color: '$textLight50',
    },
    '_web': {
      boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.2)',
    },

    '_dark': {
      bg: '$backgroundDark800',
      _text: {
        color: '$textDark50',
      },
    },
  },
  { descendantStyle: ['_text'] }
);
