import { styled } from '@dank-style/react';
import { View } from 'react-native';

const HStack = styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
      },

      descendants: {},
    },
    defaultProps: {
      //@ts-ignore
      space: 'md',
    },
  },
  {}
);

export { default as Spacer } from './Spacer';
export { HStack as Root };
