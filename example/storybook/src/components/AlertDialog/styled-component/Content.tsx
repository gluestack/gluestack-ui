import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    // shadow: 1
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: '$white',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    rounded: '$lg',
    overflow: 'hidden',
    bg: '$white',
    maxWidth: 450,
    _dark: {
      bg: '$muted800',
      color: '$text50',
    },
  },
  {}
);
