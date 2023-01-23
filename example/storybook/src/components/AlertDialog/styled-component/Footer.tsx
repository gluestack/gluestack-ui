import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    p: '$4',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    bg: '$muted50',
    borderColor: '$muted300',

    _dark: {
      bg: '$muted800',
      borderColor: '$muted700',
    },
  },
  {}
);
