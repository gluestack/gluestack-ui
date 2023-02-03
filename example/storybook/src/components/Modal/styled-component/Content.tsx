import { View, Dimensions } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    width: '75%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    maxHeight: Dimensions.get('window').height - 150,
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
