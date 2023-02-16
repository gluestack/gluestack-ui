import { styled } from '@dank-style/react';

import { View } from 'react-native';
export default styled(
  View,
  {
    py: '$1',
    px: '$1',
    borderRadius: 4,
    bg: '$backgroundLight900',

    _text: {
      color: '$red900',
    },

    _web: {
      shadow: '$8',
    },

    _dark: {
      bg: '$backgroundDark800',
      _text: {
        // color: '$textDark50',
      },
    },
  },
  { descendantStyle: ['_text'] }
);
