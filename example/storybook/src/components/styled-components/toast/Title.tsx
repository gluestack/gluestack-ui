//@ts-nocheck

import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    color: '$textLight900',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$xs',
    letterSpacing: '$md',
    lineHeight: '$lg',

    _dark: {
      color: '$textDark50',
    },
  },
  {}
);
