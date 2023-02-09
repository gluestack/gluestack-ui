import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'bg': 'transparent',
    '_web': {
      //@ts-ignore
      outlineWidth: 0,
    },

    'variants': {
      size: {
        md: {
          px: '$4',
          py: '$2',

          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },

    ':hover': {
      bg: '$secondary50_alpha_20',
      borderRadius: '$full',
    },
    ':active': {
      bg: '$secondary50_alpha_10',
      borderRadius: '$full',
      _text: {
        color: '$red500',
      },
    },
    ':focus': {
      bg: '$secondary50_alpha_20',
      borderRadius: '$full',
    },
    ':disabled': {
      opacity: 0.5,
    },
  },
  {
    descendantStyle: ['_icon', '_text'],
  }
);
