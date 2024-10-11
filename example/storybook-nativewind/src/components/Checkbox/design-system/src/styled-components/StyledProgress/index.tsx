import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export const StyledProgress = styled(
  View,
  {
    bg: '$muted200',
    h: '$2',
    borderRadius: 999,
    w: '100%',

    _dark: {
      bg: '$muted500',
    },
  },
  {}
);
