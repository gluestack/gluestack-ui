import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    // p: '$2',
    rounded: 'none',
    borderTopLeftRadius: '$2xl',
    borderTopRightRadius: '$2xl',
    bg: '$backgroundLight0',
    _dark: {
      bg: '$backgroundDark900',
    },

    _web: {
      //@ts-ignore
      userSelect: 'none',
    },
  },
  {}
);
