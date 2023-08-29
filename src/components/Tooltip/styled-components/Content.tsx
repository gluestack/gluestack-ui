// @ts-nocheck
import { styled } from '../../styled';
import { Motion } from '@legendapp/motion';

export default styled(
  Motion.View,
  {
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
    'borderRadius': '$sm',
    'bg': '$muted.800',

    '_text': {
      fontSize: '$sm',
      color: '$text.50',
    },

    '_dark': {
      bg: '$muted.50',
      _text: {
        color: '$text.900',
      },
    },
    'defaultProps': {
      shadow: '6',
    },
  },
  { descendantStyle: ['_text'] }
);
