import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    p: '$4',
    borderBottomWidth: 1,
    bg: '$backgroundLight50',
    borderColor: '$borderLight100',

    _dark: {
      bg: '$backgroundDark900',
      borderColor: '$borderDark800',
    },
  },
  {}
);
