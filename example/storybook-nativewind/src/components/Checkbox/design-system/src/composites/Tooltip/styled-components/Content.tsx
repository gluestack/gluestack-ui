import { styled } from '@gluestack-style/react';

import { View } from 'react-native';
export default styled(
  View,
  {
    py: '$1',
    px: '$2',
    borderRadius: 4,
    bg: '$backgroundLight800',

    _web: {
      boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.2)',
    },

    _dark: {
      bg: '$backgroundDark50',
    },
  },
  {}
);
