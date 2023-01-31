import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export const Tab = styled(
  Pressable,
  {
    'bg': 'transparent',
    'outlineWidth': 0,

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

    //@ts-ignore
    ':hover': {
      bg: '$secondary100',
      borderRadius: '$full',
    },
    //@ts-ignore
    ':active': {
      bg: '$secondary200',
      borderRadius: '$full',
    },
    //@ts-ignore
    ':focus': {
      bg: '$secondary300',
      borderRadius: '$full',
    },
    //@ts-ignore
    ':disabled': {
      opacity: 0.5,
    },
  },
  {}
);
