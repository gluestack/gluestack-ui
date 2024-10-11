import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text50',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$xs',
    letterSpacing: '$md',
    lineHeight: '$lg',

    variants: {
      variant: {
        modalHeader: {
          fontSize: '$md',
          fontWeight: '$semibold',
          lineHeight: '$sm',
        },
      },
    },

    _dark: {
      color: '$text900',
    },
  },
  {}
);
