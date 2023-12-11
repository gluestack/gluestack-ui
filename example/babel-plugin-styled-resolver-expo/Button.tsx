import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
export const Button = styled(
  Pressable,
  {
    'bg': 'aqua',
    'p': '$3',
    'm': '$3',
    '@sm': {
      'bg': `$red400`,
      ':hover': {
        'bg': 'aqua',
        ':hover': {
          'bg': '$yellow500',
          ':focus': {
            bg: 'red',
          },
        },
      },
    },
    '@md': {
      bg: `$green500`,
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
