import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'h': '100%',
    'bg': '$muted200',
    'borderRadius': 32,
    'overflow': 'hidden',
    ':disabled': {
      opacity: 0.4,
    },
    '_dark': {
      bg: '$muted700',
    },
  },
  {}
);
