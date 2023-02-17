import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    shadowColor: 'black',
    // @ts-ignore
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    rounded: '$lg',
    overflow: 'hidden',
    bg: '$muted50',
    maxWidth: 450,

    _dark: {
      bg: '$muted800',
    },
  },
  {}
);
