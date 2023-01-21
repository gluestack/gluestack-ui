import { styled } from '@dank-style/react';

import { View } from 'react-native';
export default styled(
  View,
  {
    baseStyle: {
      style: {
        py: '$1',
        px: '$2',
        borderRadius: 4,
        bg: '$muted800',
        color: '$text50',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$muted50',
            color: '$text900',
          },
        },
      },
    },
  },
  {}
);
