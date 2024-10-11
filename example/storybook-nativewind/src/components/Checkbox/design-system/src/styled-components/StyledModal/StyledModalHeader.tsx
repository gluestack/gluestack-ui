import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    p: '$4',
    borderBottomWidth: 1,
    bg: '$muted50',
    borderColor: '$muted200',

    _dark: {
      bg: '$muted800',
      borderColor: '$muted700',
    },
  },
  {}
);
